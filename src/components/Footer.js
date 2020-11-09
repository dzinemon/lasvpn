import React from "react"

import { Link } from "gatsby"

import Section from "../components/bits/Section"

import Logo from "../svg/logo.svg"

export default function Footer() {
  return (
    <Section classes=" pt-40 pb-20 bg-gray-100">
      <div className="xl:container mx-auto px-2 sm:px-6 lg:px-8 overflow-hidden">
        <div className="w-full flex flex-wrap justify-start">
          <div className="max-w-sm">
            <Link
              to="/"
              className="flex-shrink-0 flex flex-row items-center cursor-pointer text-gray-900 hover:text-gray-700"
            >
              <img className="h-8 w-auto" src={Logo} alt=" logo" />
              <span className="ml-1 text-lg">
                Lasles<span className="font-semibold">VPN</span>
              </span>
            </Link>
            <p className="leading-loose text-gray-800 mt-6">
              LaslesVPN is a private virtual network that has unique features
              and has high security.
            </p>
            <p className="text-sm text-gray-600 mt-6 mb-10">©2020LaslesVPN</p>
          </div>

          <div className="flex flex-wrap justify-start md:justify-end flex-grow -mx-4">
            <div className="px-4 w-40 mb-10">
              <p className="mb-5 font-semibold">Product</p>
              <ul className="text-gray-600">
                <li className="mb-3">
                  <Link to="#" className="hover:underline cursor-pointer">
                    Download
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline cursor-pointer">
                    Pricing
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline cursor-pointer">
                    Locations
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline cursor-pointer">Server</Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline cursor-pointer">
                    Countries
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline cursor-pointer">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="px-4 w-40 mb-10">
              <p className="mb-5 font-semibold">Engage</p>
              <ul className="text-gray-600">
                <li className="mb-3">
                  <Link to="#" className="hover:underline cursor-pointer">
                    LaslesVPN ?
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline cursor-pointer">FAQ</Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline cursor-pointer">
                    Tutorials
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline cursor-pointer">
                    About Us
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline cursor-pointer">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline cursor-pointer">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="px-4 w-40 mb-10">
              <p className="mb-5 font-semibold">Earn Money</p>
              <ul className="text-gray-600">
                <li className="mb-3">
                  <Link to="#" className="hover:underline cursor-pointer">
                    Affiliate
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="#" className="hover:underline cursor-pointer">
                    Become Partner
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
