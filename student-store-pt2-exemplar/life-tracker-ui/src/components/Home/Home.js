import { useEffect } from "react"
import { useLocation } from "react-router-dom"
//import SubNavbar from "../SubNavbar/SubNavbar"
//import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
//import Contact from "../Contact/Contact"
//import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Activities from "../Activities/Activities"
import "./Home.css"

export default function Home({
  user,
  isFetching,
  products,
  activeCategory,
  //setActiveCategory,
  //handleOnSearchInputChange,
  searchInputValue,
  addToCart,
  removeFromCart,
  getQuantityOfItemInCart,
}) {
  const location = useLocation()

  useEffect(() => {
    // some silly react router magic to get hash links to work
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location.hash])

  const productsByCategory =
    Boolean(activeCategory) && activeCategory.toLowerCase() !== "all categories"
      ? products.filter((p) => p.category === activeCategory.toLowerCase())
      : products

  const productsToShow = Boolean(searchInputValue)
    ? productsByCategory.filter((p) => p.name.toLowerCase().indexOf(searchInputValue))
    : productsByCategory

  return (
    <div className="Home">
      <Navbar />
      <About />
      <Activities />
    </div>
  )
}
