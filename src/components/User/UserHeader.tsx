import React from "react"
import { useHistory } from "react-router-dom"

import { signOutWithGoogle } from "services/firebaseService"
import { HOME_PATH, LANDING_PATH, EDIT_PATH } from "utils/constants/paths"

import { Button, Header, Nav, Anchor } from "grommet"

const AppHeader = () => {
  const history = useHistory()

  return (
    <Header background="dark-1" pad="medium">
      <Anchor
        color="light"
        onClick={() => history.push(HOME_PATH)}
        label="YAOS"
      />
      <Nav direction="row">
        <Button
          secondary
          label="Profile"
          onClick={() =>
            history.push({
              pathname: EDIT_PATH,
              state: {
                firstTime: false,
              },
            })
          }
        />
        <Button
          secondary
          label="Log Out"
          onClick={() => {
            signOutWithGoogle()
            history.push(LANDING_PATH)
          }}
        />
      </Nav>
    </Header>
  )
}

export default AppHeader
