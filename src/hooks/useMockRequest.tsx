export const useMockRequest = () => {
	const requestPromise = (onSuccess: () => void) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				const sucesso = true
				if (sucesso) {
					onSuccess()
					resolve('OK')
				}
				reject('Erro')
			}, 2000)
		})
	return { requestPromise }
}
