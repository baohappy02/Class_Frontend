import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import DropdownMenu from "./DropdownMenu";
import { Popover } from "@headlessui/react";
import { Link } from "gatsby";

const init_sub_menu = [
  {
    name: "beauty_at_home",
    href: "/about",
  },
  {
    name: "career_opportunities",
    href: "#",
    sub_menu: [
      {
        name: "career_counseling",
        href: "#",
      },
    ],
  },
  {
    name: "support_center",
    href: "#",
    sub_menu: [
      {
        name: "customer",
        href: "#",
      },
    ],
  },
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
    <Popover.Group as="nav" className="hidden md:flex space-x-10">
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
            className="text-base font-medium text-custom-text-black hover:text-general-primary-d"
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
