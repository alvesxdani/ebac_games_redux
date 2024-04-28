import { RenderOptions, render } from '@testing-library/react'
import { PreloadedState } from '@reduxjs/toolkit'
import { RootState, AppStore, configuraStore } from '../store'
import { PropsWithChildren, ReactElement } from 'react'
import { Provider } from 'react-redux'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderizaComProvider(
  element: ReactElement,
  {
    preloadedState = {},
    store = configuraStore(preloadedState),
    ...opcoesAdicionais
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Encapsulador({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
  return {
    preloadedState,
    store,
    ...render(element, { wrapper: Encapsulador, ...opcoesAdicionais })
  }
}
