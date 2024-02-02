export const AmountPendingCard = ({
    title,
    amount,
    orderCount
}) => {
    return <div className="flex-grow bg-white rounded-lg shadow-sm p-5 flex-col h-fit min-w-80">
        <h5 className="flex text-stone-600 gap-3 items-center">
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.3" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
        </h5>
        <div className="flex justify-between items-center">
            <p className="text-3xl font-medium">
                ₹{amount}
            </p>
            {orderCount ? <p className="flex items-center font-medium text-base underline text-blue-700">
                {orderCount} Orders

                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>
            </p> : null}
        </div>
    </div >
}