import { render, RenderOptions } from '@testing-library/react'
import React, { JSX, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { AppStore, configureStore, RootState } from '../../redux/store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}

export function providerRender(element: React.ReactElement, { preloadedState = {}, store = configureStore(preloadedState), ...additionalOptions }: ExtendedRenderOptions = {}) {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(element, {
      wrapper: Wrapper,
      ...additionalOptions
    })
  }
}
