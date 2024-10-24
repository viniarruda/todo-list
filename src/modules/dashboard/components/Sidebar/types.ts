export type RoutesProps =
  | string[]
  | (
      | string
      | {
          url: {
            pathname: string
            query: {
              [key: string]: string
            }
          }
          as: string
        }
    )[]

export type Items = {
  title: string
  routes: RoutesProps
  path: string
  icon: React.ReactNode
}

export type MenuItems = Items[]
