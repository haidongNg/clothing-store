import { FC } from 'react'

const Signin: FC = () => {
    return (
        <div className="section is-medium">
            <div className="box" style={{maxWidth: '400px'}}>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="example@email.com" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="example@email.com" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
