const ItemListContainer = ( { saludo } ) => {

    const styles = {
        padding: '15px',
        margin: '20px',
        fontSize: '20px'
    }

    return (
        <h1 style={styles}>
            { saludo }
        </h1>
    )
}

export default ItemListContainer