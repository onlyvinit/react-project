import React from 'react'

function SectionTwo() {
    return (
        <>
            <div className="swiperSection">
                <button className='prev'><i class="fa-solid fa-chevron-left"></i> </button>
                <div className="cards">
                    <div>
                        <h4>one</h4>
                        <img src="https://images.pexels.com/photos/15304506/pexels-photo-15304506/free-photo-of-photos-beside-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div>
                        <h4>two</h4>
                        <img src="https://images.pexels.com/photos/28611267/pexels-photo-28611267/free-photo-of-vibrant-autumn-market-in-breisach-am-rhein.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div>
                        <h4>three</h4>
                        <img src="https://images.pexels.com/photos/28816724/pexels-photo-28816724/free-photo-of-colorful-traditional-textiles-close-up.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div>
                        <h4>four</h4>
                        <img src="https://images.pexels.com/photos/28704749/pexels-photo-28704749/free-photo-of-cozy-matcha-latte-with-autumn-decor-on-rustic-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
                <button className='next'><i class="fa-solid fa-chevron-right"></i></button>


            </div>
        </>
    )
}

export default SectionTwo