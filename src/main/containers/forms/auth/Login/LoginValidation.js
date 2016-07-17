import memoize from 'lru-memoize'
import { createValidator, required, minLength, email } from 'common/utils/validation'

const validator = createValidator({
  email: [required, email],
  password: [required, minLength(8)]
})

export default memoize(10)(validator)
