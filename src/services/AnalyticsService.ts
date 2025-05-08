
// Analytics service to track website visitors and user interactions

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

  private constructor() {
    this.sessionStartTime = Date.now();
    this.userId = this.generateUserId();
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

  // Track page load
  public trackPageLoad(): void {
    const pageView: PageViewData = {
      page: window.location.pathname,
      referrer: document.referrer,
      timestamp: Date.now()
    };
    
    this.pageViews.push(pageView);
    console.log('Page view tracked:', pageView);
    
    // In a real implementation, you would send this data to your backend
    // this.sendToBackend('/api/analytics/pageview', pageView);
  }

  // Track user interaction
  public trackInteraction(action: string, element: string): void {
    const interaction: InteractionData = {
      action,
      element,
      page: window.location.pathname,
      timestamp: Date.now()
    };
    
    this.interactions.push(interaction);
    console.log('Interaction tracked:', interaction);
    
    // In a real implementation, you would send this data to your backend
    // this.sendToBackend('/api/analytics/interaction', interaction);
  }

  // Track section views
  public trackSectionView(sectionId: string): void {
    this.trackInteraction('view', `section-${sectionId}`);
  }

  // Get analytics data
  public getAnalyticsData() {
    return {
      userId: this.userId,
      sessionDuration: Date.now() - this.sessionStartTime,
      pageViews: this.pageViews,
      interactions: this.interactions
    };
  }

  // In a real implementation, this would send data to your backend
  // private sendToBackend(endpoint: string, data: any): void {
  //   fetch(endpoint, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       userId: this.userId,
  //       ...data
  //     })
  //   }).catch(error => console.error('Analytics error:', error));
  // }
}

export default AnalyticsService;
