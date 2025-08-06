interface ContainerDefaultProps {
    children: React.ReactNode,
    className?: string,
}

const ContainerDefault = ({ children, className = "" }: ContainerDefaultProps) => {
    return (
        <div className={`w-[80%] mx-auto ${className}`}>
            {children}
        </div>
    )
}

export default ContainerDefault;