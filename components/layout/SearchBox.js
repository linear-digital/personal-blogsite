'use client'

import { useRouter } from "next/navigation"

export default function SearchBox({ isSearch, handleSearch }) {
	const router = useRouter()
	const search = (e) => {
		e.preventDefault()
		const query = e.target.query.value
		router.push(`/blogs?query=${query}`)
		handleSearch()
	}
	return (
		<>
			<div id="popup-search-box">
				<div className="box-inner-wrap d-flex align-items-center">
					<form onSubmit={search} id="form" action="#" method="get" role="search">
						<input id="popup-search" type="text" name="query" placeholder="Type keywords here..." />
						<button id="popup-search-button" type="submit" name="submit">
							<i className="las la-search" />
						</button>
					</form>
					<div onClick={handleSearch} className="search-close"><i className="las la-times" /></div>
				</div>
			</div>
		</>
	)
}
