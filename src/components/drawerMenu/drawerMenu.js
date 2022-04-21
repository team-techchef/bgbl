import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/core'

const DrawerMenu = ({ btnRef, isOpen, onClose, children }) => (
  <>
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton size='lg' />
        <DrawerHeader></DrawerHeader>
        {children}
        <DrawerBody></DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
)

export default DrawerMenu
