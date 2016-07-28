export const ENDPOINT = 'http://search-timeinc-traffic-obidrwcmhurgxigosqf6r7qbcq.us-east-1.es.amazonaws.com/pageviews/_search';

/**
 * Get posts by specific brand in given timeframe, aggregate by view count into
 * buckets based on URL.
 */
export const RANGE = {
  ts: {
    /**
     * Date Format Reference:
     * https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-daterange-aggregation.html#date-format-pattern
     **/
    gte: 'now-1d/d',   // Default 1 day
    lte: 'now',        // Default now
    time_zone: '-5:00' // EST
  }
};

export const QUERY = {
   constant_score: {
      filter: {
         bool: {
           must: []
        }
      }
   }
};

/**
 * Post count by URL aggregator
 **/
const terms = {
  field: 'url'
};
export const AGGS = {
  top_articles: { terms }
};
