import React from 'react'

function Footer() {
    return (
        <>
            <footer>
                <form action="">
                    <input type="text" placeholder='May I know your Name?' />
                    <input type="email" placeholder='What is your name' />
                    <button>submit</button>
                </form>
                <div>
                    <ul>
                        <li>plan a visit</li>
                        <li>explore our service</li>
                        <li>know more about us</li>
                        <li>Manage your visit</li>
                    </ul>
                </div>
                <div>
                    <h2>Social Media</h2>
                    <div className="social-links">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-solid fa-poo"></i>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer