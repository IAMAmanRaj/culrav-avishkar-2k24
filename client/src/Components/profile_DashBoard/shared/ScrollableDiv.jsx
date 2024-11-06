function ScrollableDiv({title,titleStyle,children,className}) {
    console.log(titleStyle)
    return (
        <div className={`${className} w-full custom1560:max-h-[400px] custom1840:max-h-[450px] max-h-[350px] bg-dark-secondary py-5 pl-2 pr-4 border-Mine_Shaft_700 border-2 rounded-lg flex flex-col `}>
            <div className={titleStyle ? `${titleStyle}`:`text-customOrange text-xl mb-7 ml-5`}>{title}</div>
            <div className="min-h-[250px] max-h-[250px] custom1560:max-h-[380px]  custom1840:max-h-[400px] overflow-y-auto
                [&::-webkit-scrollbar]:md:w-3
            [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-thumb]:rounded-full 
                custom-scrollbar
                [&::-webkit-scrollbar-thumb]:bg-Mine_Shaft_100 px-3">
                {children}
            </div>
        </div>
    )
}

export default ScrollableDiv;