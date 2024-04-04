import { IoIosClose } from 'react-icons/io'
import './search.scss'
import { useRef } from 'react'

const Search = ({ searchValue, setSearchValue }) => {

    const inputRef = useRef()

    const onClickClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

	return (
		<>
			<input
                ref={inputRef}
				value={searchValue}
				onChange={event => setSearchValue(event.target.value)}
				className='search'
				placeholder='Search...'
			/>
			{searchValue && <IoIosClose onClick={onClickClear} className='search-close' />}
		</>
	)
}

export default Search
