'use strict';

import request from 'request';
import { ENDPOINT } from 'constants';

exports.handler = (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2));
  console.log( ...arguments );
  const body = mapRequest( event );
  const json = post( ENDPOINT, body );
  return json;
};

function mapRequest( query ) {
  console.log( ...arguments )
}

async function post( url, body ) {
  console.log( ...arguments )
  const data = await request.post(
    url,
    reqBody,
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return new Error( `Status ${ response.statusCode }: ${ error.message }`);
      }
    }
  );

  return data.json();
}
exports.handler();



// function process( response, callback ) {
//   console.log(`RESPONSE CODE: ${response.statusCode}`,
//               `HEADERS: ${ JSON.stringify( response.headers ) }`,
//               `BODY: ${ JSON.stringify( response.body ) }`);
//
//   let body = '';
//   response.on('data', d => body += d );
//   response.on('error', e => callback( JSON.stringify( e.message ) ));
//   response.on('end', () => callback( JSON.parse( body ) ) );
// }
//
//
