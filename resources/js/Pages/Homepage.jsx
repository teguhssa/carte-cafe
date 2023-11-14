import Layouts from "@/Comp/Layouts";
import Menu from "@/Comp/Menu/Menu";

export default function Homepage({datas}) {
    return (
        <Layouts>
            <Menu datas={datas.data} meta={datas.meta} />
        </Layouts>
    );
}
