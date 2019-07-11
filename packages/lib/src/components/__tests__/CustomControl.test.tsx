import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/react/cleanup-after-each'
import {render, cleanup, wait} from '@testing-library/react'
import {CustomControl, GoogleMapProvider, MapBox} from '../../..'
import {defineGlobalVariable} from '../../__test__helpers__'

defineGlobalVariable()

describe('CustomControl', () => {
  afterEach(() => {
    cleanup()
  })

  it('can be rendered', async () => {
    const {container} = render(
      <GoogleMapProvider>
        <MapBox apiKey="FAKE_KEY" />
        <CustomControl>
          <p>This is a custom control</p>
        </CustomControl>
      </GoogleMapProvider>,
    )

    await wait(() => {
      expect(container.innerHTML).not.toMatch('Loading...')
    })
  })
})
