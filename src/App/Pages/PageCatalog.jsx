import Breadcrumbs from '../../Breadcumbs/Breadcrumbs'
import Catalog from '../../Catalog/Catalog'
import Feature from '../../Feature/Feaure'
import Filter from '../../Filter/Filter'
import Subscribe from '../../Subscribe/Subscribe'

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
