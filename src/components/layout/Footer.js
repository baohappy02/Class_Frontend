import React from 'react'

function Footer(props) {
    return (
        <footer className="bg-transparent w-full bg-gray-900 pb-6">
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-gray-700" />
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-center text-sm text-white font-semibold py-1 space-x-2">
                Copyright © 2021 
              </div>
              <div className="text-center text-sm text-white font-semibold py-1 space-x-2">
                  <span>By: </span>
                <a href="/"
                  className="text-white hover:text-gray-400 text-sm font-semibold py-1">lq.bao@tego.global</a>
              </div>
            </div>
          </div>
        </div>  
      </footer>
    )
}

Footer.propTypes = {

}

export default Footer