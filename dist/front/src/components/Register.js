"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var LoadingButton_1 = __importDefault(require("@mui/lab/LoadingButton"));
var Toaster_1 = require("./Toaster");
var react_router_dom_1 = require("react-router-dom");
var Utilities_1 = require("./Utilities");
var hooks_1 = require("../redux/hooks");
var userSlice_1 = require("../redux/userSlice");
function Register() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var user = (0, hooks_1.useAppSelector)(function (state) { return state.user; });
    var dispatch = (0, hooks_1.useAppDispatch)();
    var _a = (0, react_1.useState)(false), loading = _a[0], setLoading = _a[1];
    var _b = (0, react_1.useState)({ firstName: null, lastName: null, email: null, password: null, confirmPassword: null }), credentials = _b[0], setCredentials = _b[1];
    function handleInputChange(key, value) {
        console.log(key);
        credentials[key] = value;
        setCredentials(credentials);
    }
    function register() {
        if ((0, Utilities_1.hasNullProp)(credentials))
            return (0, Toaster_1.toastWarning)('Please fill all the fields!');
        if (!(0, Utilities_1.isEmail)(credentials.email))
            return (0, Toaster_1.toastWarning)('Invalid e-mail!');
        try {
            setLoading(true);
            // fetch
            var data = {
                userId: 1,
                firstName: 'Yutaro',
                lastName: 'Negi',
                email: 'souza_yutaro@hotmail.com',
                password: '1234',
            };
            dispatch((0, userSlice_1.setUser)(data));
            (0, Toaster_1.toastSucess)('Success!');
            setLoading(false);
            navigate('/home');
        }
        catch (error) {
            console.log('erro logging in!');
            console.log(error);
            setLoading(false);
            (0, Toaster_1.toastError)('Incorrect email or password!');
        }
    }
    return (<Box_1.default sx={{ display: 'flex', flexDirection: 'column', width: '20em', height: '35em', margin: '0 auto 2em auto', justifyContent: 'space-evenly' }}>
            <TextField_1.default onChange={function (e) { handleInputChange(e.target.name, e.target.value); }} name="firstName" label="First tName" variant="outlined"/>
            <TextField_1.default onChange={function (e) { handleInputChange(e.target.name, e.target.value); }} name="lastName" label="Last Name" variant="outlined"/>
            <TextField_1.default onChange={function (e) { handleInputChange(e.target.name, e.target.value); }} name="email" label="e-mail" variant="outlined"/>
            <TextField_1.default onChange={function (e) { handleInputChange(e.target.name, e.target.value); }} name="password" type='password' label="Password" variant="outlined"/>
            <TextField_1.default onChange={function (e) { handleInputChange(e.target.name, e.target.value); }} name="confirmPassword" type='password' label="Confirm Password" variant="outlined"/>

            <LoadingButton_1.default onClick={register} name="email" loading={loading} variant="contained">Register</LoadingButton_1.default>
            <LoadingButton_1.default onClick={function () { navigate('/login'); }} name="password" loading={loading} variant="contained">Login</LoadingButton_1.default>
        </Box_1.default>);
}
exports.default = Register;
