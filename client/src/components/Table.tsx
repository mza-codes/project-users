import "./Table.css";
import {
    ColumnDirective,
    ColumnsDirective,
    ContextMenu,
    GridComponent,
    Inject,
    Page,
    Resize,
    Sort,
} from "@syncfusion/ej2-react-grids";
import { DBUser } from "../@types";

type Props = {
    users: DBUser[];
};

export default function Table({ users }: Props) {
    return (
        <GridComponent className="capitalize font-medium"
            allowPaging
            allowSorting
            id="users-table"
            dataSource={users}
            pageSettings={{ pageSize: 13 }}
        >
            <ColumnsDirective>
                <ColumnDirective
                    width="40"
                    textAlign="Left"
                    headerText="User"
                    template={generateImg}
                />
                <ColumnDirective field="email" width="40" textAlign="Left" headerText="Email" />
                <ColumnDirective field="gender" width="20" textAlign="Left" headerText="Gender" />
                <ColumnDirective
                    width="40"
                    textAlign="Left"
                    headerText="Country"
                    template={generateCity}
                />
                <ColumnDirective field="phone" width="30" textAlign="Left" headerText="Phone" />
            </ColumnsDirective>
            <Inject services={[Resize, Page, Sort, ContextMenu]} />
        </GridComponent>
    );
}

function generateImg(props: DBUser) {
    return (
        <div className="flex items-center gap-2">
            <img
                className="rounded-full w-10 h-10"
                src={props.picture.thumbnail}
                alt="user_thumbnail"
            />
            <p className="font-medium">{props.fullname}</p>
        </div>
    );
}

function generateCity(user: DBUser) {
    return (
        <p className="font-semibold">
            {`${user.location.city}, ${user.location.state}, ${user.location.country}`}
        </p>
    );
}

/** 
 * <ColumnDirective
                    field="fullname"
                    width="50"
                    textAlign="Left"
                    headerText="FullName"
                />
 */
