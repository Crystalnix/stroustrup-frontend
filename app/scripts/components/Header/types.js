// @flow
import type { UserType } from '../../types'

export type Props = {
  deleteUser: () => mixed,
  closeDrawer: () => mixed,
  user: UserType,
  drawer: boolean,
}
