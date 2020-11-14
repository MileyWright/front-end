//State maping for connected components

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        isLoading: state.isLoading,
        error: state.error,
        data: state.data
    };
};

export default mapStateToProps;