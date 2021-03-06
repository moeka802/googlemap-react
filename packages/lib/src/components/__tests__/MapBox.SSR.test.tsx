import React from 'react'
import {renderToString} from 'react-dom/server'
import {GoogleMapProvider, MapBox} from '../../..'

describe('MapBox', () => {
  beforeEach(() => {
    delete (global as any).document
  })

  it('does not render map at server side', async () => {
    expect(
      renderToString(
        <GoogleMapProvider>
          <MapBox />
        </GoogleMapProvider>,
      ),
    ).not.toMatch('map')
  })
})
