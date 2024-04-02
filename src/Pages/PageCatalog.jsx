import Breadcrumbs from './../components/Breadcumbs/Breadcrumbs'
import Catalog from './../components/Catalog/Catalog'
import Feature from './../components/Feature/Feature'
import Filter from './../components/Filter/Filter'
import Subscribe from './../components/Subscribe/Subscribe'

const PageCatalog = () => {
	return (
		<>
			<Breadcrumbs />
            <Filter />
            <Catalog />
            <Feature />
            <Subscribe />
		</>
	)
}

export default PageCatalog
