import { FC, FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import {History} from 'history';
import { signin } from '../../store/actions/index';
// Type
interface FormSignin {
    email: string;
    password: string;
}

type SigninProps = {
    signin: (form: FormSignin, callback: () => void) => void;
    history: History;
};

const Signin: FC<SigninProps> = (props) => {
    const [formSignin, setFormSign] = useState<FormSignin>({
        email: '',
        password: '',
    });

    /**
     * Change Input
     * 
     * @param e Element
     */
    const handleOnChange = (e: FormEvent<HTMLInputElement>): void => {
        setFormSign({
            ...formSignin,
            [e.currentTarget.name]: e.currentTarget.value
        })
    };

    /**
     * Signin
     * 
     * @param e Form
     */
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        props.signin(formSignin, () => {
            // Redirect
            props.history.push('/');
        });
    }

    return (
        <div className="section is-medium">
            <div className="box" style={{ maxWidth: '400px' }}>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="email"
                                placeholder="example@email.com"
                                value={formSignin.email}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input
                                className="input"
                                type="password"
                                name="password"
                                placeholder="********"
                                value={formSignin.password}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </div>
                    </div>
                    <button className="button" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    );
};

const conector = connect(null, { signin });
export default conector(Signin);
