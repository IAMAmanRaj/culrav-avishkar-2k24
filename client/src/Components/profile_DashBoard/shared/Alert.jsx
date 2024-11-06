import { Button } from "@/ShadCnComponents/ui/button";

function Alert({ title, ButtonTitle, img, handleCancel, handleProceed, children }) {
    return (
        <div className="sm:p-0 p-8 fixed inset-0 z-50 bg-[#212121]/70 flex justify-center items-center">
            <div className="flex bg-floral_white  rounded-lg p-4 sm:px-20 sm:py-5 gap-5 flex-col justify-center items-center">
                {img && <div className="w-12 h-12 flex justify-center items-center  rounded-full bg-customRed/30  border-2 border-custom_gray_100">
                    <img className="w-8 h-8" src={img} alt="Alert Image" /> </div>}
                <div className="w-full text-center text-2xl font-bold font-sfText">{title}</div>
                <div className="">{children}</div>
                <div className="flex flex-row gap-8">
                    <Button
                        onClick={handleCancel}
                        className="text-center text-black bg-custom_gray_100 hover:bg-gray-400 px-10 text-lg font-sfText font-normal"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleProceed}
                        className="text-center text-white bg-customRed hover:bg-red-700 px-10 text-lg font-sfText font-normal"
                    >
                        {ButtonTitle}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Alert;
