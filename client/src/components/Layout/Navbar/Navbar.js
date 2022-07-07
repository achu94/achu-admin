import {useState} from "react";
import {Container, Icon, Image, Menu, Sidebar} from "semantic-ui-react";

const NavBarMobile = (props) => {
    const {
        children,
        leftItems,
        onPusherClick,
        onToggle,
        rightItems,
        visible
    } = props;

    return (
        <Sidebar.Pushable>
            <Sidebar
                as={Menu}
                animation="overlay"
                icon="labeled"
                inverted
                items={leftItems}
                vertical
                visible={visible}
            />
            <Sidebar.Pusher
                dimmed={visible}
                onClick={onPusherClick}
                style={{minHeight: "100vh"}}
            >
                <Menu fixed="top" inverted>
                    <Menu.Item>
                        <Image size="mini" src="https://react.semantic-ui.com/logo.png"/>
                    </Menu.Item>
                    <Menu.Item onClick={onToggle}>
                        <Icon name="sidebar"/>
                    </Menu.Item>
                    <Menu.Menu position="right">
                        {rightItems.map((item) => {
                            <Menu.Item {...item}/>
                        })}
                    </Menu.Menu>
                </Menu>
                {children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
}

const NavBarDesktop = (props) => {
    const {leftItems, rightItems} = props;

    return (
        <Menu fixed="top" inverted>
            <Menu.Item>
                <Image size="mini" src="https://react.semantic-ui.com/logo.png"/>
            </Menu.Item>

            {leftItems.map((item) => (
                <Menu.Item {...item} />
            ))}

            <Menu.Menu position="right">
                {rightItems.map((item) => (
                    <Menu.Item {...item} />
                ))}
            </Menu.Menu>
        </Menu>
    );
};

const NavBarChildren = (props) => (
    <Container style={{marginTop: "5em"}}>{props.children}</Container>
);

const Navbar = (props) => {
    const [visible, setVisible] = useState(false);

    const handlePusher = () => {
        if (visible) setVisible(false);
    }

    const handleToggle = () => setVisible(!visible);

    const {children, leftItems, rightItems} = props;

    return (
        <>
            {/*<div className="mobile">*/}
            {/*    <NavBarMobile*/}
            {/*        leftItems={leftItems}*/}
            {/*        onPusherClick={handlePusher}*/}
            {/*        onToggle={handleToggle}*/}
            {/*        rightItems={rightItems}*/}
            {/*        visible={visible}*/}
            {/*    >*/}
            {/*        <NavBarChildren>{children}</NavBarChildren>*/}
            {/*    </NavBarMobile>*/}
            {/*</div>*/}

            <div className="desktop">
                <NavBarDesktop leftItems={leftItems} rightItems={rightItems}/>
                <NavBarChildren>{children}</NavBarChildren>
            </div>
        </>
    );
}

export default Navbar;
