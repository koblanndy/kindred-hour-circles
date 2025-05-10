
// Analytics service to track website visitors and user interactions
import { supabase } from "@/integrations/supabase/client";

// Interface for page view data
interface PageViewData {
  page: string;
  referrer?: string;
  timestamp: number;
}

// Interface for user interaction data
interface InteractionData {
  action: string;
  element: string;
  page: string;
  timestamp: number;
}

class AnalyticsService {
  private static instance: AnalyticsService;
  private pageViews: PageViewData[] = [];
  private interactions: InteractionData[] = [];
  private sessionStartTime: number;
  private userId: string;
  private sessionId: string;

  private constructor() {
    this.sessionStartTime = Date.now();
    this.userId = this.generateUserId();
    this.sessionId = this.generateSessionId();
    console.log('Analytics service initialized');
    this.trackPageLoad();
  }

  // Singleton pattern
  public static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  // Generate a simple user identifier
  private generateUserId(): string {
    return 'user_' + Math.random().toString(36).substring(2, 15);
  }

  // Generate a session identifier
  private generateSessionId(): string {
    return 'session_' + Math.random().toString(36).substring(2, 15);
  }

  // Track page load
  public async trackPageLoad(): Promise<void> {
    const pageView: PageViewData = {
      page: window.location.pathname,
      referrer: document.referrer,
      timestamp: Date.now()
    };
    
    this.pageViews.push(pageView);
    console.log('Page view tracked:', pageView);
    
    // Save to Supabase
    try {
      const { error } = await supabase.from('analytics').insert([{
        page: pageView.page,
        referrer: pageView.referrer,
        session_id: this.sessionId
      }]);

      if (error) {
        console.error('Error saving analytics data:', error);
      }
    } catch (err) {
      console.error('Error in analytics tracking:', err);
    }
  }

  // Track user interaction
  public async trackInteraction(action: string, element: string): Promise<void> {
    const interaction: InteractionData = {
      action,
      element,
      page: window.location.pathname,
      timestamp: Date.now()
    };
    
    this.interactions.push(interaction);
    console.log('Interaction tracked:', interaction);
    
    // Save to Supabase
    try {
      const { error } = await supabase.from('analytics').insert([{
        page: interaction.page,
        section: element,
        session_id: this.sessionId
      }]);

      if (error) {
        console.error('Error saving interaction data:', error);
      }
    } catch (err) {
      console.error('Error in interaction tracking:', err);
    }
  }

  // Track section views
  public trackSectionView(sectionId: string): void {
    this.trackInteraction('view', `section-${sectionId}`);
  }

  // Get analytics data
  public getAnalyticsData() {
    return {
      userId: this.userId,
      sessionId: this.sessionId,
      sessionDuration: Date.now() - this.sessionStartTime,
      pageViews: this.pageViews,
      interactions: this.interactions
    };
  }
}

export default AnalyticsService;
