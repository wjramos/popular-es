import request from 'request';
import { AGGS as aggs, QUERY as query, RANGE as range, ENDPOINT } from './constants';

export default class ElasticSearchAggregator {
  constructor ( brand, date, limit ) {
    this.brand = brand;
    this.date = date;
    this.limit = limit;

    this.endpoint = ENDPOINT;
    this.query = { aggs, query, range }
    this.query.range.ts.gte = date;

    const filters = this.query.query.constant_score.filter.bool.must;
    filters.push({ range });

    const url = new Regexp( `https?:\/\/(.*)?${ brand }.com\/((.*)\/)+(.*)?` );
    filters.push({ url });
  }

  async fetch ( endpoint ) {
    await post( ENDPOINT, JSON.stringify( this.body ) )
  }
}

async function post( url, body ) {
  const data = await request.post(
    url,
    reqBody,
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return new Error( `Status ${ response.statusCode }: ${ error.message }`);
      }
    }
  );

  return await data.json();
}
