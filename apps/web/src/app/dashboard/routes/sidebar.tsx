/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 */

interface IRoute{
  path?: string
  icon?: string
  name: string
  routes?: IRoute[]
  checkActive?(pathname: String, route: IRoute): boolean
  exact?: boolean
}

export function routeIsActive (pathname: String, route: IRoute): boolean {
  if (route.checkActive) {
    return route.checkActive(pathname, route)
  }

  return route?.exact
    ? pathname == route?.path
    : (route?.path ? pathname.indexOf(route.path) === 0 : false)
}

const routes: IRoute[] = [
  {
    path: '/', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Home', // name that appear in Sidebar
    exact: true,
  },
  {
    path: '/dashboard/sidebar-menu/forms',
    icon: 'FormsIcon',
    name: 'Forms',
  },
  {
    path: '/dashboard/sidebar-menu/products',
    icon: 'CardsIcon',
    name: 'Products',
  },
  {
    path: '/dashboard/sidebar-menu/charts',
    icon: 'ChartsIcon',
    name: 'Charts',
  },
  {
    path: '/dashboard/sidebar-menu/tables',
    icon: 'TablesIcon',
    name: 'Tables',
  },
  {
    icon: 'PagesIcon',
    name: 'Pages',
    routes: [
      {
        path: '/dashboard/sidebar-menu/create-account',
        name: 'Create account',
      },
    ],
  },
]

export type {IRoute}
export default routes
