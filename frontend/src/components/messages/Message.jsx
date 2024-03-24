const Message=()=> {
    return(
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <svg height="100%" version="1.1" viewBox="0 0 32 32" width="100%"><path d="M4.554,23.764c-0.111,0.322 -0.049,0.679 0.163,0.946c2.544,3.201 6.645,5.29 11.273,5.29c4.628,0 8.729,-2.089 11.273,-5.29c0.212,-0.267 0.273,-0.624 0.163,-0.946c-1.538,-4.485 -6.07,-7.764 -11.436,-7.764c-5.366,0 -9.898,3.279 -11.436,7.764Zm2.088,0.131c1.441,-3.458 5.093,-5.895 9.348,-5.895c4.255,0 7.907,2.437 9.348,5.895c-2.206,2.508 -5.577,4.105 -9.348,4.105c-3.771,0 -7.142,-1.597 -9.348,-4.105l0,-0Z"/><path d="M15.99,2c-3.312,0 -6,2.689 -6,6c-0,3.311 2.688,6 6,6c3.311,0 6,-2.689 6,-6c-0,-3.311 -2.689,-6 -6,-6Zm-0,2c2.208,0 4,1.792 4,4c-0,2.208 -1.792,4 -4,4c-2.208,0 -4,-1.792 -4,-4c-0,-2.208 1.792,-4 4,-4Z"/></svg>
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500`}>Hi! Whats up?</div>
            <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:42?</div>
        </div>
    )
};
export default Message;