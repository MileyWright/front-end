//State maping for connected components

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        isLoading: state.isLoading,
        addSuccess: state.addSuccess,
        role: state.role,
        username: state.username,
        operatorId: state.operatorId,
        error: state.error,
        data: state.data
    };
};

export default mapStateToProps;