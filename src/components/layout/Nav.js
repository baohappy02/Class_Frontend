import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import DropdownMenu from "./DropdownMenu";
import { Popover } from "@headlessui/react";
import { Link } from "gatsby";
// import { LINKTOABOUT } from '../../utils/router'

const init_sub_menu = [
  {
    name: "lang",
    href: "#",
    sub_menu: [
      {
        name: "english",
        href: "#",
        key: "en",
      },
      {
        name: "vietnamese",
        key: "vi",
        href: "#",
      },
    ],
  },
];

function Nav(props) {
  const intl = useIntl();

  const [sub_menu] = useState(init_sub_menu);

  return (
    <Popover.Group as="nav" className="lg:flex lg:px-10 px-3 pt-2">
      {sub_menu.map((value) => {
        if (value.sub_menu)
          return (
            <DropdownMenu
              key={value.name}
              title={intl.formatMessage({ id: value.name })}
              list_sub_menu={value.sub_menu}
            />
          );

        return (
          <Link
            key={value.name}
            to={value.href}
            className="text-lg leading-4-5 font-semibold text-custom-text-black hover:text-indigo-800"
          >
            {intl.formatMessage({ id: value.name })}
          </Link>
        );
      })}
    </Popover.Group>
  );
}

Nav.propTypes = {};

export default Nav;
