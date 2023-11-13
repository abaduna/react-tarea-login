

import {useFormik} from "formik"
import { initialValues, validationSchema } from "./schemas"
import {Container,Grid,TextField,Button,Box} from "@mui/material"
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useContext, useState } from "react"
import { AuthContex } from "../../contexts/Auth";

const Login = () => {
  const navigate = useNavigate()
  const [wrrongPassword,setWrrongPassword] = useState(false)
  const {login} = useContext(AuthContex)
  

  const handleLogin = async ({ userName, password }) => {
    console.log(userName, password);
    try {
        const jkt = await login({userName, password});
        if (!jkt) return setWrrongPassword(true);

        navigate("/dasboard");
    } catch (error) {
        console.error("Error during login:", error);
        setWrrongPassword(true);
    }
};
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema(),
    onSubmit: (obj) => {
      handleLogin(obj);
    },
  });
  return (
    <>
      <Container>
        <Grid item xs={12} md={4}>
          <form onSubmit={formik.handleSubmit}>
            <Box mt={2}>
              <TextField
                type="text"
                name="userName"
                label="UserName"
                onChange={formik.handleChange}
                error={formik.touched.userName && Boolean(formik.errors.userName)}
                fullWidth
              />
              {formik.touched.userName && <span>{formik.errors.userName}</span>}
            </Box>
            <Box mt={2}>
              <TextField
                type="password"
                name="password"
                label="Password"
                onChange={formik.handleChange}
                error={formik.errors.password}
                fullWidth
              />
              {formik.touched.password && <span>{formik.errors.password}</span>}
            </Box>
            <Box mt={3}>
              <Button fullWidth type="submit" variant="contained" color="primary">
                Registrar
              </Button>
            </Box>
          </form>
          {wrrongPassword  && <h2>Usauario incorecto</h2>}
        </Grid>
      </Container>
    </>
  )
}

export default Login