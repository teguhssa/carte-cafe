import FormEditMenu from "@/Comp/Menu/FormEditMenu";
import Layouts from "@/Comp/Layouts";

export default function EditMenu ({menu}) {
    return (
        <>
        <Layouts>
            <FormEditMenu menu={menu}/>
        </Layouts>
        </>
    )
}