import React, { useState, Fragment } from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import DropdownMenuTest from "./DropdownMenuTest";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "gatsby";
import { LINKTOABOUT } from '../../utils/router'
import {  MenuIcon } from "../../assets/icons";

const init_sub_menu = [
  {
    name: "beauty_at_home",
    href: LINKTOABOUT,
  },
  {
    name: "career_opportunities",
    href: "#",
    sub_menu: [
      {
        name: "career_counseling",
        href: "#",
      },
      {
        name: "registration_process",
        href: "#",
      },
      {
        name: "training_program",
        href: "#",
      },
      {
        name: "cooperation_with_yabe",
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
      {
        name: "technician",
        href: "#",
      }, {
        name: "yabe_application",
        href: "#",
      }, {
        name: "operation_regulation",
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

function NavTest(props) {
  const intl = useIntl();

  const [sub_menu] = useState(init_sub_menu);

  return (
    <Popover.Group as="nav" className="flex lg:hidden space-x-20 mt-2">
      <Popover className="relative w-10 h-8">
        {({ open }) => (
          <>
            <Popover.Button
              className={
                open
                  ? "text-general-primary-d focus:outline-none cursor-pointe inline-flex items-center text-base font-medium"
                  : "text-custom-text-black focus:outline-none cursor-pointe inline-flex items-center text-base font-medium hover:text-general-primary-d"
              }
            >
              <MenuIcon className="w-10 h-8" />
            </Popover.Button>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
              static
              className="absolute z-10 right-0 shadow-lg w-96"
            >
                <div className="ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div
                  className="relative grid gap-6 bg-white px-2 py-2 sm:gap-8 sm:px-2"
                >
                    {sub_menu.map((value) => {
                      if (value.sub_menu)
                        return (
                          <DropdownMenuTest
                            key={value.name}
                            title={intl.formatMessage({ id: value.name })}
                            list_sub_menu={value.sub_menu}
                          />
                        );

                      return (
                        <Link
                          key={value.name}
                          to={value.href}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          {intl.formatMessage({ id: value.name })}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </Popover.Group>
  );
}

NavTest.propTypes = {};

export default NavTest;
