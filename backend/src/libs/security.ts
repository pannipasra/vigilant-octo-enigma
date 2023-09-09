import 'dotenv/config'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { 
    Strategy as JwtStrategy,
    StrategyOptions,
    ExtractJwt,
} from 'passport-jwt'

// 1 setting passport-local
passport.use(
    new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            session: false
        },
        (username:string, password:string, done:any) => {
            if(username==='unif' && password==='1234'){
                return done(null, username);
            }else{
                return done(null, false, { message: 'username or password is incorrect' });
            }
        }
    )
);

// 2 setting passport-jwt
const opts:StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}
passport.use(
    new JwtStrategy(
        opts, ( jwtPayload:any, done:any ) => {
            done(null, jwtPayload);
        }
    )
);

// 3 export passport
export default passport;