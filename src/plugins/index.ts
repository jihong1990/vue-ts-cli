/* eslint-disable */
import {
    Button,
    NavBar,
    List,
    Search,
    Card,
    DropdownMenu,
    DropdownItem,
    Image as VanImage,
    PullRefresh,
    ActionSheet,
    Form,
    Field,
    CellGroup,
    Popup,
    Picker,
    DatetimePicker,
    Toast,
    Calendar,
    Icon,
    Tag,
    Checkbox,
    CheckboxGroup,
} from 'vant';
import get from 'lodash/get';
import 'vant/lib/index.css';
export default {
    install: (app: any) => {
        app.config.globalProperties._get = get;
        app.use(Button)
            .use(NavBar)
            .use(List)
            .use(Search)
            .use(Card)
            .use(DropdownMenu)
            .use(DropdownItem)
            .use(VanImage)
            .use(PullRefresh)
            .use(ActionSheet)
            .use(Form)
            .use(Field)
            .use(CellGroup)
            .use(Popup)
            .use(Toast)
            .use(DatetimePicker)
            .use(Calendar)
            .use(Icon)
            .use(Tag)
            .use(Picker)
            .use(CheckboxGroup)
            .use(Checkbox);
    },
};
