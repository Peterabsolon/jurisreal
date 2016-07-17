import memoize from 'lru-memoize'
import { createValidator, required, minLength, email } from 'common/utils/validation'

const surveyValidation = createValidator({
  firstName: [required],
  lastName: [required],
  email: [required, email],
  password: [required, minLength(8)]
})

export default memoize(10)(surveyValidation)
