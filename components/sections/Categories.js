
import { fetcher } from '@/lib/dataFetcher'
import Link from 'next/link'
export default async function Categories() {
    const tags = await fetcher({ path: "/blog/tags" })
    return (
        <>
            <section className="categories-section padding">
                <div className="container">
                    <div className="row">
                        {
                            tags?.slice(0, 4)?.map((item, i) => (
                                <div className="col-lg-3 col-md-6" key={i}>
                                    <div className="categorie-item">
                                        <div className="categorie-thumb">
                                            <Link href={`/category/${item?.slug}`}><img src={'/assets/img/image.png'} alt="img" /></Link>
                                        </div>
                                        <div className="categorie-content">
                                            <span>{item?.count} Post</span>
                                            <h3 className="categorie-title"><Link href={`/category/${item?.slug}`}>{item?.name}</Link></h3>
                                            <Link href={`/category/${item?.slug}`} className="default-btn categorie-btn">See All Post</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}
