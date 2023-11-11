/* eslint-disable import/no-extraneous-dependencies */
import * as matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'
import '@testing-library/jest-dom/vitest'

expect.extend(matchers)
