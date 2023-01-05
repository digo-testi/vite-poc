

export default {
  appMatrix: import.meta.env.MATRIX_APP ?? 'MKP',
  protocol: import.meta.env.PROXY_PROTOCOL ?? '',
  serviceDiscovery: import.meta.env.MATRIX_SERVICE_DISCOVERY_API_URL ?? ''
}
