import React from 'react'

const Navbar = () => {
    const openWebsite = (e)=>{
        window.open("https://www.github.com" , "_blank")
        // console.log(e)
    }
    return (
        <nav className='bg-slate-800 py-4'>
            <div className="cont justify-around flex">
                <div className="PassOp text-white font-bold">
                    <span className='text-green-700'>&lt;</span>
                    Pass
                    <span className='text-green-700'> OP/&gt;</span>
                </div>
                <ul>
                    <li className='flex gap-3 '>
                        <div className='flex cursor-pointer mr-3 items-center text-center  invert'>
                            <img onClick={openWebsite} href = "www.github.com" alt="svgImg" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPiAgICA8cGF0aCBkPSJNMTUsM0M4LjM3MywzLDMsOC4zNzMsMywxNWMwLDUuNjIzLDMuODcyLDEwLjMyOCw5LjA5MiwxMS42M0MxMi4wMzYsMjYuNDY4LDEyLDI2LjI4LDEyLDI2LjA0N3YtMi4wNTEgYy0wLjQ4NywwLTEuMzAzLDAtMS41MDgsMGMtMC44MjEsMC0xLjU1MS0wLjM1My0xLjkwNS0xLjAwOWMtMC4zOTMtMC43MjktMC40NjEtMS44NDQtMS40MzUtMi41MjYgYy0wLjI4OS0wLjIyNy0wLjA2OS0wLjQ4NiwwLjI2NC0wLjQ1MWMwLjYxNSwwLjE3NCwxLjEyNSwwLjU5NiwxLjYwNSwxLjIyMmMwLjQ3OCwwLjYyNywwLjcwMywwLjc2OSwxLjU5NiwwLjc2OSBjMC40MzMsMCwxLjA4MS0wLjAyNSwxLjY5MS0wLjEyMWMwLjMyOC0wLjgzMywwLjg5NS0xLjYsMS41ODgtMS45NjJjLTMuOTk2LTAuNDExLTUuOTAzLTIuMzk5LTUuOTAzLTUuMDk4IGMwLTEuMTYyLDAuNDk1LTIuMjg2LDEuMzM2LTMuMjMzQzkuMDUzLDEwLjY0Nyw4LjcwNiw4LjczLDkuNDM1LDhjMS43OTgsMCwyLjg4NSwxLjE2NiwzLjE0NiwxLjQ4MUMxMy40NzcsOS4xNzQsMTQuNDYxLDksMTUuNDk1LDkgYzEuMDM2LDAsMi4wMjQsMC4xNzQsMi45MjIsMC40ODNDMTguNjc1LDkuMTcsMTkuNzYzLDgsMjEuNTY1LDhjMC43MzIsMC43MzEsMC4zODEsMi42NTYsMC4xMDIsMy41OTQgYzAuODM2LDAuOTQ1LDEuMzI4LDIuMDY2LDEuMzI4LDMuMjI2YzAsMi42OTctMS45MDQsNC42ODQtNS44OTQsNS4wOTdDMTguMTk5LDIwLjQ5LDE5LDIyLjEsMTksMjMuMzEzdjIuNzM0IGMwLDAuMTA0LTAuMDIzLDAuMTc5LTAuMDM1LDAuMjY4QzIzLjY0MSwyNC42NzYsMjcsMjAuMjM2LDI3LDE1QzI3LDguMzczLDIxLjYyNywzLDE1LDN6Ii8+PC9zdmc+" />
                            <h2 className='pl-2 font-semibold mr-5 '>GitHub</h2>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
