import ReactGA from 'react-ga4'

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path })
}

// Track custom events
export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  })
}

// Track GetApp button clicks (Conversions)
export const trackGetAppClick = () => {
  ReactGA.event({
    category: 'Engagement',
    action: 'Click',
    label: 'Get App Button',
  })
}

// Track feature section views
export const trackFeatureView = (featureName) => {
  ReactGA.event({
    category: 'Features',
    action: 'View',
    label: featureName,
  })
}

// Track navigation clicks
export const trackNavigationClick = (navItem) => {
  ReactGA.event({
    category: 'Navigation',
    action: 'Click',
    label: navItem,
  })
}
