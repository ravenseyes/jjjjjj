// ECS
!(function(t, e) {
  for (var n in e) t[n] = e[n]
})(
  this,
  (function(t) {
    var e = {}
    function n(o) {
      if (e[o]) return e[o].exports
      var r = (e[o] = { i: o, l: !1, exports: {} })
      return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o })
      }),
      (n.r = function(t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (n.t = function(t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t
        var o = Object.create(null)
        if ((n.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
          for (var r in t)
            n.d(
              o,
              r,
              function(e) {
                return t[e]
              }.bind(null, r)
            )
        return o
      }),
      (n.n = function(t) {
        var e =
          t && t.__esModule
            ? function() {
                return t.default
              }
            : function() {
                return t
              }
        return n.d(e, 'a', e), e
      }),
      (n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (n.p = ''),
      n((n.s = 30))
    )
  })([
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__assign) ||
          function() {
            return (o =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        r =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          },
        i =
          (this && this.__read) ||
          function(t, e) {
            var n = 'function' == typeof Symbol && t[Symbol.iterator]
            if (!n) return t
            var o,
              r,
              i = n.call(t),
              s = []
            try {
              for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; ) s.push(o.value)
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i)
              } finally {
                if (r) throw r.error
              }
            }
            return s
          },
        s =
          (this && this.__spread) ||
          function() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e]))
            return t
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.isDisposableComponent = e.ObservableComponent = e.getComponentId = e.getComponentClassId = e.getComponentName = e.DisposableComponent = e.Component = e.DisposableComponentUpdated = e.DisposableComponentRemoved = e.DisposableComponentCreated = void 0)
      var a = n(1),
        p = n(8),
        u = n(18),
        l = (function() {
          function t(t, e, n) {
            ;(this.componentId = t), (this.componentName = e), (this.classId = n)
          }
          return (t = r([p.EventConstructor()], t))
        })()
      e.DisposableComponentCreated = l
      var c = (function() {
        function t(t) {
          this.componentId = t
        }
        return (t = r([p.EventConstructor()], t))
      })()
      e.DisposableComponentRemoved = c
      var h = (function() {
        function t(t, e) {
          ;(this.componentId = t), (this.component = e)
        }
        return (t = r([p.EventConstructor()], t))
      })()
      function d(t, e) {
        return function(n) {
          if (n.isComponent) throw new TypeError('You cannot extend a component. Trying to extend ' + n.originalClassName + ' with: ' + t)
          if ('number' != typeof e || isNaN(e)) throw new Error('classId: ' + e + ' is an invalid integer')
          var o = n,
            r = function() {
              if (!d.engine) throw new Error('You need to set a DisposableComponent.engine before creating disposable components')
              var n = Array.prototype.slice.call(arguments),
                r = new (o.bind.apply(o, s([void 0], n)))(),
                i = a.newId('C')
              return (
                Object.defineProperty(r, '__name__symbol_', { enumerable: !1, writable: !1, configurable: !1, value: t }),
                Object.defineProperty(r, '__component__id_', { enumerable: !1, writable: !1, configurable: !1, value: i }),
                void 0 !== e &&
                  Object.defineProperty(r, '__classId__symbol_', { enumerable: !1, writable: !1, configurable: !1, value: e }),
                d.engine && d.engine.registerComponent(r),
                r
              )
            }
          return (
            void 0 !== e && (r.__classId__symbol_ = e),
            (r.__name__symbol_ = t),
            (r.isComponent = !0),
            (r.isDisposableComponent = !0),
            (r.originalClassName = t),
            ((r.prototype = n.prototype).constructor = n),
            r
          )
        }
      }
      function f(t) {
        if (!t) throw new TypeError(t + ' is not a component.')
        if (t.__component__id_) return t.__component__id_
        throw new TypeError(t + ' is not a registered disposable component.')
      }
      ;(e.DisposableComponentUpdated = h),
        (e.Component = function(t, e) {
          return function(n) {
            if (n.isComponent) throw new TypeError('You cannot extend a component. Trying to extend ' + n.originalClassName + ' with: ' + t)
            var o = n,
              r = function() {
                var n = Array.prototype.slice.call(arguments),
                  r = new (o.bind.apply(o, s([void 0], n)))()
                return (
                  Object.defineProperty(r, '__name__symbol_', { enumerable: !1, writable: !1, configurable: !1, value: t }),
                  void 0 !== e &&
                    Object.defineProperty(r, '__classId__symbol_', { enumerable: !1, writable: !1, configurable: !1, value: e }),
                  r
                )
              }
            return (
              void 0 !== e && (r.__classId__symbol_ = e),
              (r.__name__symbol_ = t),
              (r.isComponent = !0),
              (r.originalClassName = t),
              ((r.prototype = n.prototype).constructor = n),
              r
            )
          }
        }),
        (e.DisposableComponent = d),
        (function(t) {
          t.engine = null
        })((d = e.DisposableComponent || (e.DisposableComponent = {}))),
        (e.getComponentName = function(t) {
          if (!t) throw new TypeError(t + ' is not a component.')
          if (t.__name__symbol_) return t.__name__symbol_
          throw new TypeError(t + ' is not a registered component.')
        }),
        (e.getComponentClassId = function(t) {
          if (!t) throw new TypeError(t + ' is not a component.')
          if (t.__classId__symbol_) return t.__classId__symbol_
          if (!t.__name__symbol_) throw new TypeError(t + ' is not a registered component.')
          return null
        }),
        (e.getComponentId = f)
      var y = (function() {
        function t() {
          ;(this.dirty = !1), (this.data = {}), (this.subscriptions = [])
        }
        return (
          (t.component = function(t, e) {
            if (delete t[e]) {
              var n = e + '_' + Math.random()
              ;(t[n] = void 0),
                Object.defineProperty(t, n, o(o({}, Object.getOwnPropertyDescriptor(t, n)), { enumerable: !1 })),
                Object.defineProperty(t, e.toString(), {
                  get: function() {
                    return this[n]
                  },
                  set: function(t) {
                    var o = this[n]
                    if (((this.data[e] = t ? f(t) : null), (this[n] = t), t !== o)) {
                      this.dirty = !0
                      for (var r = 0; r < this.subscriptions.length; r++) this.subscriptions[r](e, t, o)
                    }
                  },
                  enumerable: !0
                })
            }
          }),
          (t.field = function(t, e) {
            delete t[e] &&
              Object.defineProperty(t, e.toString(), {
                get: function() {
                  return this.data[e]
                },
                set: function(t) {
                  var n = this.data[e]
                  if (((this.data[e] = t), t !== n)) {
                    this.dirty = !0
                    for (var o = 0; o < this.subscriptions.length; o++) this.subscriptions[o](e, t, n)
                  }
                },
                enumerable: !0
              })
          }),
          (t.uiValue = function(t, e) {
            delete t[e] &&
              Object.defineProperty(t, e.toString(), {
                get: function() {
                  return this.data[e].toString()
                },
                set: function(t) {
                  var n = this.data[e],
                    o = new u.UIValue(t)
                  if (((this.data[e] = o), o !== n)) {
                    this.dirty = !0
                    for (var r = 0; r < this.subscriptions.length; r++) this.subscriptions[r](e, o, n)
                  }
                },
                enumerable: !0
              })
          }),
          (t.readonly = function(t, e) {
            delete t[e] &&
              Object.defineProperty(t, e.toString(), {
                get: function() {
                  if (e in this.data == !1) throw new Error('The field ' + e + ' is uninitialized')
                  return this.data[e]
                },
                set: function(t) {
                  if (e in this.data) throw new Error('The field ' + e + ' is readonly')
                  ;(this.data[e] = t), (this.dirty = !0)
                },
                enumerable: !0,
                configurable: !1
              })
          }),
          (t.prototype.onChange = function(t) {
            return this.subscriptions.push(t), this
          }),
          (t.prototype.toJSON = function() {
            return this.data
          }),
          t
        )
      })()
      ;(e.ObservableComponent = y),
        (e.isDisposableComponent = function(t) {
          return '__component__id_' in t
        })
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__read) ||
          function(t, e) {
            var n = 'function' == typeof Symbol && t[Symbol.iterator]
            if (!n) return t
            var o,
              r,
              i = n.call(t),
              s = []
            try {
              for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; ) s.push(o.value)
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i)
              } finally {
                if (r) throw r.error
              }
            }
            return s
          },
        r =
          (this && this.__spread) ||
          function() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e]))
            return t
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.openNFTDialog = e.openExternalURL = e.buildArray = e.uuid = e.newId = e.error = e.log = void 0)
      var i = 0
      ;(e.log = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        'undefined' != typeof dcl ? dcl.log.apply(dcl, r(t)) : console.log.apply(console, r(['DEBUG:'], t))
      }),
        (e.error = function(t, e) {
          'undefined' != typeof dcl ? dcl.error(t, e) : console.error('ERROR:', t, e)
        }),
        (e.newId = function(t) {
          if ((i++, 0 === t.length)) throw new Error('newId(type: string): type cannot be empty')
          return t + i.toString(36)
        }),
        (e.uuid = function() {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(t) {
            var e = (16 * Math.random()) | 0
            return ('x' === t ? e : (3 & e) | 8).toString(16)
          })
        }),
        (e.buildArray = function(t, e) {
          for (var n = [], o = 0; o < t; ++o) n.push(e())
          return n
        }),
        (e.openExternalURL = function(t) {
          'undefined' != typeof dcl ? dcl.openExternalUrl(t) : console.error('ERROR: openExternalURL dcl is undefined')
        }),
        (e.openNFTDialog = function(t, e) {
          if ((void 0 === e && (e = null), 'undefined' != typeof dcl)) {
            var n = t.match(/ethereum:\/\/(.+)\/(.+)/)
            if (!n || n.length < 3) return
            dcl.openNFTDialog(n[1], n[2], e)
          } else console.error('ERROR: openNFTDialog dcl is undefined')
        })
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.RAD2DEG = e.DEG2RAD = e.Epsilon = e.ToLinearSpace = e.ToGammaSpace = e.Space = e.Orientation = void 0),
        (function(t) {
          ;(t[(t.CW = 0)] = 'CW'), (t[(t.CCW = 1)] = 'CCW')
        })(e.Orientation || (e.Orientation = {})),
        (function(t) {
          ;(t[(t.LOCAL = 0)] = 'LOCAL'), (t[(t.WORLD = 1)] = 'WORLD'), (t[(t.BONE = 2)] = 'BONE')
        })(e.Space || (e.Space = {})),
        (e.ToGammaSpace = 1 / 2.2),
        (e.ToLinearSpace = 2.2),
        (e.Epsilon = 1e-6),
        (e.DEG2RAD = Math.PI / 180),
        (e.RAD2DEG = 360 / (2 * Math.PI))
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Vector3 = void 0)
      var o = n(9),
        r = n(2),
        i = n(10),
        s = n(6),
        a = (function() {
          function t(t, e, n) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), (this.x = t), (this.y = e), (this.z = n)
          }
          return (
            Object.defineProperty(t.prototype, 'isNonUniform', {
              get: function() {
                var t = Math.abs(this.x),
                  e = Math.abs(this.y)
                if (t !== e) return !0
                var n = Math.abs(this.z)
                return t !== n || e !== n
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.Add = function(e, n) {
              return new t(e.x, e.y, e.z).addInPlace(n)
            }),
            (t.GetClipFactor = function(e, n, o, r) {
              var i = t.Dot(e, o) - r
              return i / (i - (t.Dot(n, o) - r))
            }),
            (t.GetAngleBetweenVectors = function(e, n, r) {
              var i = e.normalizeToRef(o.MathTmp.Vector3[1]),
                s = n.normalizeToRef(o.MathTmp.Vector3[2]),
                a = t.Dot(i, s),
                p = o.MathTmp.Vector3[3]
              return t.CrossToRef(i, s, p), t.Dot(p, r) > 0 ? Math.acos(a) : -Math.acos(a)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2])
            }),
            (t.FromFloatArray = function(e, n) {
              return t.FromArray(e, n)
            }),
            (t.FromArrayToRef = function(t, e, n) {
              ;(n.x = t[e]), (n.y = t[e + 1]), (n.z = t[e + 2])
            }),
            (t.FromFloatArrayToRef = function(e, n, o) {
              return t.FromArrayToRef(e, n, o)
            }),
            (t.FromFloatsToRef = function(t, e, n, o) {
              o.copyFromFloats(t, e, n)
            }),
            (t.Zero = function() {
              return new t(0, 0, 0)
            }),
            (t.One = function() {
              return new t(1, 1, 1)
            }),
            (t.Up = function() {
              return new t(0, 1, 0)
            }),
            (t.Down = function() {
              return new t(0, -1, 0)
            }),
            (t.Forward = function() {
              return new t(0, 0, 1)
            }),
            (t.Backward = function() {
              return new t(0, 0, -1)
            }),
            (t.Right = function() {
              return new t(1, 0, 0)
            }),
            (t.Left = function() {
              return new t(-1, 0, 0)
            }),
            (t.TransformCoordinates = function(e, n) {
              var o = t.Zero()
              return t.TransformCoordinatesToRef(e, n, o), o
            }),
            (t.TransformCoordinatesToRef = function(e, n, o) {
              return t.TransformCoordinatesFromFloatsToRef(e.x, e.y, e.z, n, o)
            }),
            (t.TransformCoordinatesFromFloatsToRef = function(t, e, n, o, r) {
              var i = o.m,
                s = t * i[0] + e * i[4] + n * i[8] + i[12],
                a = t * i[1] + e * i[5] + n * i[9] + i[13],
                p = t * i[2] + e * i[6] + n * i[10] + i[14],
                u = 1 / (t * i[3] + e * i[7] + n * i[11] + i[15])
              ;(r.x = s * u), (r.y = a * u), (r.z = p * u)
            }),
            (t.TransformNormal = function(e, n) {
              var o = t.Zero()
              return t.TransformNormalToRef(e, n, o), o
            }),
            (t.TransformNormalToRef = function(t, e, n) {
              this.TransformNormalFromFloatsToRef(t.x, t.y, t.z, e, n)
            }),
            (t.TransformNormalFromFloatsToRef = function(t, e, n, o, r) {
              var i = o.m
              ;(r.x = t * i[0] + e * i[4] + n * i[8]), (r.y = t * i[1] + e * i[5] + n * i[9]), (r.z = t * i[2] + e * i[6] + n * i[10])
            }),
            (t.CatmullRom = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s
              return new t(
                0.5 * (2 * n.x + (-e.x + o.x) * i + (2 * e.x - 5 * n.x + 4 * o.x - r.x) * s + (-e.x + 3 * n.x - 3 * o.x + r.x) * a),
                0.5 * (2 * n.y + (-e.y + o.y) * i + (2 * e.y - 5 * n.y + 4 * o.y - r.y) * s + (-e.y + 3 * n.y - 3 * o.y + r.y) * a),
                0.5 * (2 * n.z + (-e.z + o.z) * i + (2 * e.z - 5 * n.z + 4 * o.z - r.z) * s + (-e.z + 3 * n.z - 3 * o.z + r.z) * a)
              )
            }),
            (t.Clamp = function(e, n, o) {
              var r = new t()
              return t.ClampToRef(e, n, o, r), r
            }),
            (t.ClampToRef = function(t, e, n, o) {
              var r = t.x
              r = (r = r > n.x ? n.x : r) < e.x ? e.x : r
              var i = t.y
              i = (i = i > n.y ? n.y : i) < e.y ? e.y : i
              var s = t.z
              ;(s = (s = s > n.z ? n.z : s) < e.z ? e.z : s), o.copyFromFloats(r, i, s)
            }),
            (t.Hermite = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s,
                p = 2 * a - 3 * s + 1,
                u = -2 * a + 3 * s,
                l = a - 2 * s + i,
                c = a - s
              return new t(
                e.x * p + o.x * u + n.x * l + r.x * c,
                e.y * p + o.y * u + n.y * l + r.y * c,
                e.z * p + o.z * u + n.z * l + r.z * c
              )
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t(0, 0, 0)
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              ;(o.x = t.x + (e.x - t.x) * n), (o.y = t.y + (e.y - t.y) * n), (o.z = t.z + (e.z - t.z) * n)
            }),
            (t.Dot = function(t, e) {
              return t.x * e.x + t.y * e.y + t.z * e.z
            }),
            (t.Cross = function(e, n) {
              var o = t.Zero()
              return t.CrossToRef(e, n, o), o
            }),
            (t.CrossToRef = function(t, e, n) {
              var o = t.y * e.z - t.z * e.y,
                r = t.z * e.x - t.x * e.z,
                i = t.x * e.y - t.y * e.x
              n.copyFromFloats(o, r, i)
            }),
            (t.Normalize = function(e) {
              var n = t.Zero()
              return t.NormalizeToRef(e, n), n
            }),
            (t.NormalizeToRef = function(t, e) {
              t.normalizeToRef(e)
            }),
            (t.Minimize = function(e, n) {
              var o = new t(e.x, e.y, e.z)
              return o.minimizeInPlace(n), o
            }),
            (t.Maximize = function(e, n) {
              var o = new t(e.x, e.y, e.z)
              return o.maximizeInPlace(n), o
            }),
            (t.Distance = function(e, n) {
              return Math.sqrt(t.DistanceSquared(e, n))
            }),
            (t.DistanceSquared = function(t, e) {
              var n = t.x - e.x,
                o = t.y - e.y,
                r = t.z - e.z
              return n * n + o * o + r * r
            }),
            (t.Center = function(e, n) {
              var o = t.Add(e, n)
              return o.scaleInPlace(0.5), o
            }),
            (t.RotationFromAxis = function(e, n, o) {
              var r = t.Zero()
              return t.RotationFromAxisToRef(e, n, o, r), r
            }),
            (t.RotationFromAxisToRef = function(t, e, n, r) {
              var s = o.MathTmp.Quaternion[0]
              i.Quaternion.RotationQuaternionFromAxisToRef(t, e, n, s), r.copyFrom(s.eulerAngles)
            }),
            (t.prototype.toString = function() {
              return '(' + this.x + ', ' + this.y + ', ' + this.z + ')'
            }),
            (t.prototype.getClassName = function() {
              return 'Vector3'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * (t = (397 * t) ^ (this.y || 0))) ^ (this.z || 0))
            }),
            (t.prototype.asArray = function() {
              var t = []
              return this.toArray(t, 0), t
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), this
            }),
            (t.prototype.toQuaternion = function() {
              return i.Quaternion.Identity.setEuler(this.y, this.x, this.z)
            }),
            (t.prototype.addInPlace = function(t) {
              return this.addInPlaceFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.addInPlaceFromFloats = function(t, e, n) {
              return (this.x += t), (this.y += e), (this.z += n), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y, this.z + e.z)
            }),
            (t.prototype.addToRef = function(t, e) {
              return e.copyFromFloats(this.x + t.x, this.y + t.y, this.z + t.z)
            }),
            (t.prototype.subtractInPlace = function(t) {
              return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y, this.z - e.z)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return this.subtractFromFloatsToRef(t.x, t.y, t.z, e)
            }),
            (t.prototype.subtractFromFloats = function(e, n, o) {
              return new t(this.x - e, this.y - n, this.z - o)
            }),
            (t.prototype.subtractFromFloatsToRef = function(t, e, n, o) {
              return o.copyFromFloats(this.x - t, this.y - e, this.z - n)
            }),
            (t.prototype.applyMatrix4 = function(t) {
              this.applyMatrix4ToRef(t, this)
            }),
            (t.prototype.applyMatrix4ToRef = function(t, e) {
              var n = this.x,
                o = this.y,
                r = this.z,
                i = t.m,
                s = 1 / (i[3] * n + i[7] * o + i[11] * r + i[15])
              return (
                (e.x = (i[0] * n + i[4] * o + i[8] * r + i[12]) * s),
                (e.y = (i[1] * n + i[5] * o + i[9] * r + i[13]) * s),
                (e.z = (i[2] * n + i[6] * o + i[10] * r + i[14]) * s),
                e
              )
            }),
            (t.prototype.rotate = function(t) {
              return this.rotateToRef(t, this)
            }),
            (t.prototype.rotateToRef = function(t, e) {
              var n = this.x,
                o = this.y,
                r = this.z,
                i = t.x,
                s = t.y,
                a = t.z,
                p = t.w,
                u = p * n + s * r - a * o,
                l = p * o + a * n - i * r,
                c = p * r + i * o - s * n,
                h = -i * n - s * o - a * r
              return (
                (e.x = u * p + h * -i + l * -a - c * -s),
                (e.y = l * p + h * -s + c * -i - u * -a),
                (e.z = c * p + h * -a + u * -s - l * -i),
                e
              )
            }),
            (t.prototype.negate = function() {
              return new t(-this.x, -this.y, -this.z)
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), (this.z *= t), this
            }),
            (t.prototype.scale = function(e) {
              return new t(this.x * e, this.y * e, this.z * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return e.copyFromFloats(this.x * t, this.y * t, this.z * t)
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return e.addInPlaceFromFloats(this.x * t, this.y * t, this.z * t)
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y && this.z === t.z
            }),
            (t.prototype.equalsWithEpsilon = function(t, e) {
              return (
                void 0 === e && (e = r.Epsilon),
                t &&
                  s.Scalar.WithinEpsilon(this.x, t.x, e) &&
                  s.Scalar.WithinEpsilon(this.y, t.y, e) &&
                  s.Scalar.WithinEpsilon(this.z, t.z, e)
              )
            }),
            (t.prototype.equalsToFloats = function(t, e, n) {
              return this.x === t && this.y === e && this.z === n
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this
            }),
            (t.prototype.multiply = function(t) {
              return this.multiplyByFloats(t.x, t.y, t.z)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return e.copyFromFloats(this.x * t.x, this.y * t.y, this.z * t.z)
            }),
            (t.prototype.multiplyByFloats = function(e, n, o) {
              return new t(this.x * e, this.y * n, this.z * o)
            }),
            (t.prototype.divide = function(e) {
              return new t(this.x / e.x, this.y / e.y, this.z / e.z)
            }),
            (t.prototype.divideToRef = function(t, e) {
              return e.copyFromFloats(this.x / t.x, this.y / t.y, this.z / t.z)
            }),
            (t.prototype.divideInPlace = function(t) {
              return this.divideToRef(t, this)
            }),
            (t.prototype.minimizeInPlace = function(t) {
              return this.minimizeInPlaceFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.maximizeInPlace = function(t) {
              return this.maximizeInPlaceFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.minimizeInPlaceFromFloats = function(t, e, n) {
              return t < this.x && (this.x = t), e < this.y && (this.y = e), n < this.z && (this.z = n), this
            }),
            (t.prototype.maximizeInPlaceFromFloats = function(t, e, n) {
              return t > this.x && (this.x = t), e > this.y && (this.y = e), n > this.z && (this.z = n), this
            }),
            (t.prototype.floor = function() {
              return new t(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z))
            }),
            (t.prototype.fract = function() {
              return new t(this.x - Math.floor(this.x), this.y - Math.floor(this.y), this.z - Math.floor(this.z))
            }),
            (t.prototype.length = function() {
              return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            }),
            (t.prototype.lengthSquared = function() {
              return this.x * this.x + this.y * this.y + this.z * this.z
            }),
            (t.prototype.normalize = function() {
              return this.normalizeFromLength(this.length())
            }),
            (t.prototype.normalizeFromLength = function(t) {
              return 0 === t || 1 === t ? this : this.scaleInPlace(1 / t)
            }),
            (t.prototype.normalizeToNew = function() {
              var e = new t(0, 0, 0)
              return this.normalizeToRef(e), e
            }),
            (t.prototype.normalizeToRef = function(t) {
              var e = this.length()
              return 0 === e || 1 === e ? t.copyFromFloats(this.x, this.y, this.z) : this.scaleToRef(1 / e, t)
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y, this.z)
            }),
            (t.prototype.copyFrom = function(t) {
              return this.copyFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.copyFromFloats = function(t, e, n) {
              return (this.x = t), (this.y = e), (this.z = n), this
            }),
            (t.prototype.set = function(t, e, n) {
              return this.copyFromFloats(t, e, n)
            }),
            (t.prototype.setAll = function(t) {
              return (this.x = this.y = this.z = t), this
            }),
            t
          )
        })()
      e.Vector3 = a
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        s =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.VideoTexture = e.VideoClip = e.SmartItem = e.OnAnimationEnd = e.OnPointerLock = e.OnPointerUUIDEvent = e.OnUUIDEvent = e.BasicMaterial = e.Material = e.TransparencyMode = e.TextShape = e.Fonts = e.Font = e.OBJShape = e.Animator = e.Texture = e.NFTShape = e.PictureFrameStyle = e.GLTFShape = e.CylinderShape = e.ConeShape = e.PlaneShape = e.CircleShape = e.SphereShape = e.BoxShape = e.Shape = e.Billboard = e.Transform = e.AvatarModifierArea = e.AvatarModifiers = e.CLASS_ID = void 0)
      var a,
        p = n(0),
        u = n(5),
        l = n(26),
        c = n(1),
        h = n(16)
      !(function(t) {
        ;(t[(t.TRANSFORM = 1)] = 'TRANSFORM'),
          (t[(t.UUID_CALLBACK = 8)] = 'UUID_CALLBACK'),
          (t[(t.BOX_SHAPE = 16)] = 'BOX_SHAPE'),
          (t[(t.SPHERE_SHAPE = 17)] = 'SPHERE_SHAPE'),
          (t[(t.PLANE_SHAPE = 18)] = 'PLANE_SHAPE'),
          (t[(t.CONE_SHAPE = 19)] = 'CONE_SHAPE'),
          (t[(t.CYLINDER_SHAPE = 20)] = 'CYLINDER_SHAPE'),
          (t[(t.TEXT_SHAPE = 21)] = 'TEXT_SHAPE'),
          (t[(t.NFT_SHAPE = 22)] = 'NFT_SHAPE'),
          (t[(t.UI_WORLD_SPACE_SHAPE = 23)] = 'UI_WORLD_SPACE_SHAPE'),
          (t[(t.UI_SCREEN_SPACE_SHAPE = 24)] = 'UI_SCREEN_SPACE_SHAPE'),
          (t[(t.UI_CONTAINER_RECT = 25)] = 'UI_CONTAINER_RECT'),
          (t[(t.UI_CONTAINER_STACK = 26)] = 'UI_CONTAINER_STACK'),
          (t[(t.UI_TEXT_SHAPE = 27)] = 'UI_TEXT_SHAPE'),
          (t[(t.UI_INPUT_TEXT_SHAPE = 28)] = 'UI_INPUT_TEXT_SHAPE'),
          (t[(t.UI_IMAGE_SHAPE = 29)] = 'UI_IMAGE_SHAPE'),
          (t[(t.UI_SLIDER_SHAPE = 30)] = 'UI_SLIDER_SHAPE'),
          (t[(t.CIRCLE_SHAPE = 31)] = 'CIRCLE_SHAPE'),
          (t[(t.BILLBOARD = 32)] = 'BILLBOARD'),
          (t[(t.ANIMATION = 33)] = 'ANIMATION'),
          (t[(t.FONT = 34)] = 'FONT'),
          (t[(t.UI_FULLSCREEN_SHAPE = 40)] = 'UI_FULLSCREEN_SHAPE'),
          (t[(t.UI_BUTTON_SHAPE = 41)] = 'UI_BUTTON_SHAPE'),
          (t[(t.GLTF_SHAPE = 54)] = 'GLTF_SHAPE'),
          (t[(t.OBJ_SHAPE = 55)] = 'OBJ_SHAPE'),
          (t[(t.AVATAR_SHAPE = 56)] = 'AVATAR_SHAPE'),
          (t[(t.BASIC_MATERIAL = 64)] = 'BASIC_MATERIAL'),
          (t[(t.PBR_MATERIAL = 65)] = 'PBR_MATERIAL'),
          (t[(t.HIGHLIGHT_ENTITY = 66)] = 'HIGHLIGHT_ENTITY'),
          (t[(t.SOUND = 67)] = 'SOUND'),
          (t[(t.TEXTURE = 68)] = 'TEXTURE'),
          (t[(t.VIDEO_CLIP = 70)] = 'VIDEO_CLIP'),
          (t[(t.VIDEO_TEXTURE = 71)] = 'VIDEO_TEXTURE'),
          (t[(t.AUDIO_CLIP = 200)] = 'AUDIO_CLIP'),
          (t[(t.AUDIO_SOURCE = 201)] = 'AUDIO_SOURCE'),
          (t[(t.AUDIO_STREAM = 202)] = 'AUDIO_STREAM'),
          (t[(t.GIZMOS = 203)] = 'GIZMOS'),
          (t[(t.SMART_ITEM = 204)] = 'SMART_ITEM'),
          (t[(t.AVATAR_MODIFIER_AREA = 205)] = 'AVATAR_MODIFIER_AREA')
      })((a = e.CLASS_ID || (e.CLASS_ID = {}))),
        (function(t) {
          ;(t.HIDE_AVATARS = 'HIDE_AVATARS'), (t.DISABLE_PASSPORTS = 'DISABLE_PASSPORTS')
        })(e.AvatarModifiers || (e.AvatarModifiers = {}))
      var d = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          return (n.area = e.area), (n.modifiers = e.modifiers), n
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'area', void 0),
          s([p.ObservableComponent.field], e.prototype, 'modifiers', void 0),
          (e = s([p.Component('engine.avatarModifierArea', a.AVATAR_MODIFIER_AREA)], e))
        )
      })(p.ObservableComponent)
      e.AvatarModifierArea = d
      var f = (function(t) {
        function e(e) {
          void 0 === e && (e = {})
          var n = t.call(this) || this
          return (
            (n.position = e.position || u.Vector3.Zero()),
            (n.rotation = e.rotation || u.Quaternion.Identity),
            (n.scale = e.scale || new u.Vector3(1, 1, 1)),
            n
          )
        }
        return (
          r(e, t),
          Object.defineProperty(e.prototype, 'eulerAngles', {
            get: function() {
              return this.rotation.eulerAngles
            },
            enumerable: !1,
            configurable: !0
          }),
          (e.prototype.lookAt = function(t, e) {
            void 0 === e && (e = u.MathTmp.staticUp)
            var n = new u.Matrix()
            return u.Matrix.LookAtLHToRef(this.position, t, e, n), n.invert(), u.Quaternion.FromRotationMatrixToRef(n, this.rotation), this
          }),
          (e.prototype.rotate = function(t, e) {
            return this.rotation.multiplyInPlace(this.rotation.angleAxis(e, t)), this
          }),
          (e.prototype.translate = function(t) {
            return this.position.addInPlace(t), this
          }),
          s([p.ObservableComponent.field], e.prototype, 'position', void 0),
          s([p.ObservableComponent.field], e.prototype, 'rotation', void 0),
          s([p.ObservableComponent.field], e.prototype, 'scale', void 0),
          (e = s([p.Component('engine.transform', a.TRANSFORM)], e))
        )
      })(p.ObservableComponent)
      e.Transform = f
      var y = (function(t) {
        function e(e, n, o) {
          void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === o && (o = !0)
          var r = t.call(this) || this
          return (r.x = !0), (r.y = !0), (r.z = !0), (r.x = e), (r.y = n), (r.z = o), r
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'x', void 0),
          s([p.ObservableComponent.field], e.prototype, 'y', void 0),
          s([p.ObservableComponent.field], e.prototype, 'z', void 0),
          (e = s([p.Component('engine.billboard', a.BILLBOARD)], e))
        )
      })(p.ObservableComponent)
      e.Billboard = y
      var v = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.withCollisions = !0), (e.isPointerBlocker = !0), (e.visible = !0), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'withCollisions', void 0),
          s([p.ObservableComponent.field], e.prototype, 'isPointerBlocker', void 0),
          s([p.ObservableComponent.field], e.prototype, 'visible', void 0),
          e
        )
      })(p.ObservableComponent)
      e.Shape = v
      var m = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([p.DisposableComponent('engine.shape', a.BOX_SHAPE)], e))
      })(v)
      e.BoxShape = m
      var b = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([p.DisposableComponent('engine.shape', a.SPHERE_SHAPE)], e))
      })(v)
      e.SphereShape = b
      var g = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'segments', void 0),
          s([p.ObservableComponent.field], e.prototype, 'arc', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.CIRCLE_SHAPE)], e))
        )
      })(v)
      e.CircleShape = g
      var _ = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.width = 1), (e.height = 1), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'width', void 0),
          s([p.ObservableComponent.field], e.prototype, 'height', void 0),
          s([p.ObservableComponent.field], e.prototype, 'uvs', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.PLANE_SHAPE)], e))
        )
      })(v)
      e.PlaneShape = _
      var C = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.radiusTop = 0),
            (e.radiusBottom = 1),
            (e.segmentsHeight = 1),
            (e.segmentsRadial = 36),
            (e.openEnded = !1),
            (e.radius = null),
            (e.arc = 360),
            e
          )
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'radiusTop', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radiusBottom', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsHeight', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsRadial', void 0),
          s([p.ObservableComponent.field], e.prototype, 'openEnded', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radius', void 0),
          s([p.ObservableComponent.field], e.prototype, 'arc', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.CONE_SHAPE)], e))
        )
      })(v)
      e.ConeShape = C
      var O = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.radiusTop = 1),
            (e.radiusBottom = 1),
            (e.segmentsHeight = 1),
            (e.segmentsRadial = 36),
            (e.openEnded = !1),
            (e.radius = null),
            (e.arc = 360),
            e
          )
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'radiusTop', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radiusBottom', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsHeight', void 0),
          s([p.ObservableComponent.field], e.prototype, 'segmentsRadial', void 0),
          s([p.ObservableComponent.field], e.prototype, 'openEnded', void 0),
          s([p.ObservableComponent.field], e.prototype, 'radius', void 0),
          s([p.ObservableComponent.field], e.prototype, 'arc', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.CYLINDER_SHAPE)], e))
        )
      })(v)
      e.CylinderShape = O
      var x,
        w = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (n.src = e), n
          }
          return r(e, t), s([v.readonly], e.prototype, 'src', void 0), (e = s([p.DisposableComponent('engine.shape', a.GLTF_SHAPE)], e))
        })(v)
      ;(e.GLTFShape = w),
        (function(t) {
          ;(t[(t.Classic = 0)] = 'Classic'),
            (t[(t.Baroque_Ornament = 1)] = 'Baroque_Ornament'),
            (t[(t.Diamond_Ornament = 2)] = 'Diamond_Ornament'),
            (t[(t.Minimal_Wide = 3)] = 'Minimal_Wide'),
            (t[(t.Minimal_Grey = 4)] = 'Minimal_Grey'),
            (t[(t.Blocky = 5)] = 'Blocky'),
            (t[(t.Gold_Edges = 6)] = 'Gold_Edges'),
            (t[(t.Gold_Carved = 7)] = 'Gold_Carved'),
            (t[(t.Gold_Wide = 8)] = 'Gold_Wide'),
            (t[(t.Gold_Rounded = 9)] = 'Gold_Rounded'),
            (t[(t.Metal_Medium = 10)] = 'Metal_Medium'),
            (t[(t.Metal_Wide = 11)] = 'Metal_Wide'),
            (t[(t.Metal_Slim = 12)] = 'Metal_Slim'),
            (t[(t.Metal_Rounded = 13)] = 'Metal_Rounded'),
            (t[(t.Pins = 14)] = 'Pins'),
            (t[(t.Minimal_Black = 15)] = 'Minimal_Black'),
            (t[(t.Minimal_White = 16)] = 'Minimal_White'),
            (t[(t.Tape = 17)] = 'Tape'),
            (t[(t.Wood_Slim = 18)] = 'Wood_Slim'),
            (t[(t.Wood_Wide = 19)] = 'Wood_Wide'),
            (t[(t.Wood_Twigs = 20)] = 'Wood_Twigs'),
            (t[(t.Canvas = 21)] = 'Canvas')
        })((x = e.PictureFrameStyle || (e.PictureFrameStyle = {})))
      var T = (function(t) {
        function e(e, n) {
          void 0 === n && (n = {})
          var o = t.call(this) || this
          o.src = e
          var r = new u.Color3(0.6404918, 0.611472, 0.8584906),
            i = x.Classic
          return (
            n instanceof u.Color3 ? (r = n) : null != n && (n.color && (r = n.color), n.style && (i = n.style)),
            (o.color = r),
            (o.style = i),
            o
          )
        }
        return (
          r(e, t),
          s([v.readonly], e.prototype, 'src', void 0),
          s([v.readonly], e.prototype, 'style', void 0),
          s([p.ObservableComponent.field], e.prototype, 'color', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.NFT_SHAPE)], e))
        )
      })(v)
      e.NFTShape = T
      var R = (function(t) {
        function e(e, n) {
          var o = t.call(this) || this
          if (((o.src = e), n))
            for (var r in n) {
              o[r] = n[r]
            }
          return o
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'src', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'samplingMode', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'wrap', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'hasAlpha', void 0),
          (e = s([p.DisposableComponent('engine.texture', a.TEXTURE)], e))
        )
      })(p.ObservableComponent)
      e.Texture = R
      var A = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.states = []), e
        }
        return (
          r(e, t),
          (e.prototype.addClip = function(t) {
            var e = this
            return (
              this.states.push(t),
              t.onChange(function() {
                e.dirty = !0
              }),
              this
            )
          }),
          (e.prototype.getClip = function(t) {
            for (var e = 0; e < this.states.length; e++) {
              var n = this.states[e]
              if (n.clip === t) return n
            }
            var o = new l.AnimationState(t)
            return this.addClip(o), o
          }),
          s([p.ObservableComponent.readonly], e.prototype, 'states', void 0),
          (e = s([p.Component('engine.animator', a.ANIMATION)], e))
        )
      })(v)
      e.Animator = A
      var E = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          return (n.src = e), n
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'src', void 0),
          (e = s([p.DisposableComponent('engine.shape', a.OBJ_SHAPE)], e))
        )
      })(v)
      e.OBJShape = E
      var S = (function(t) {
        function e(e) {
          void 0 === e && (e = '')
          var n = t.call(this) || this
          return (n.src = e), n
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'src', void 0),
          (e = s([p.DisposableComponent('engine.font', a.FONT)], e))
        )
      })(p.ObservableComponent)
      ;(e.Font = S),
        (function(t) {
          ;(t.SanFrancisco = 'builtin:SF-UI-Text-Regular SDF'),
            (t.SanFrancisco_Heavy = 'builtin:SF-UI-Text-Heavy SDF'),
            (t.SanFrancisco_Semibold = 'builtin:SF-UI-Text-Semibold SDF'),
            (t.LiberationSans = 'builtin:LiberationSans SDF')
        })(e.Fonts || (e.Fonts = {}))
      var P,
        I = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (
              (n.outlineWidth = 0),
              (n.outlineColor = new u.Color3(1, 1, 1)),
              (n.color = new u.Color3(1, 1, 1)),
              (n.fontSize = 10),
              (n.fontWeight = 'normal'),
              (n.opacity = 1),
              (n.value = ''),
              (n.lineSpacing = '0px'),
              (n.lineCount = 0),
              (n.resizeToFit = !1),
              (n.textWrapping = !1),
              (n.shadowBlur = 0),
              (n.shadowOffsetX = 0),
              (n.shadowOffsetY = 0),
              (n.shadowColor = new u.Color3(1, 1, 1)),
              (n.zIndex = 0),
              (n.hTextAlign = 'center'),
              (n.vTextAlign = 'center'),
              (n.width = 1),
              (n.height = 1),
              (n.paddingTop = 0),
              (n.paddingRight = 0),
              (n.paddingBottom = 0),
              (n.paddingLeft = 0),
              (n.isPickable = !1),
              (n.billboard = !1),
              (n.visible = !0),
              e && (n.value = e),
              n
            )
          }
          return (
            r(e, t),
            s([p.ObservableComponent.field], e.prototype, 'outlineWidth', void 0),
            s([p.ObservableComponent.field], e.prototype, 'outlineColor', void 0),
            s([p.ObservableComponent.field], e.prototype, 'color', void 0),
            s([p.ObservableComponent.field], e.prototype, 'fontSize', void 0),
            s([p.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
            s([p.ObservableComponent.component], e.prototype, 'font', void 0),
            s([p.ObservableComponent.field], e.prototype, 'opacity', void 0),
            s([p.ObservableComponent.field], e.prototype, 'value', void 0),
            s([p.ObservableComponent.field], e.prototype, 'lineSpacing', void 0),
            s([p.ObservableComponent.field], e.prototype, 'lineCount', void 0),
            s([p.ObservableComponent.field], e.prototype, 'resizeToFit', void 0),
            s([p.ObservableComponent.field], e.prototype, 'textWrapping', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
            s([p.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
            s([p.ObservableComponent.field], e.prototype, 'zIndex', void 0),
            s([p.ObservableComponent.field], e.prototype, 'hTextAlign', void 0),
            s([p.ObservableComponent.field], e.prototype, 'vTextAlign', void 0),
            s([p.ObservableComponent.field], e.prototype, 'width', void 0),
            s([p.ObservableComponent.field], e.prototype, 'height', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
            s([p.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
            s([p.ObservableComponent.field], e.prototype, 'isPickable', void 0),
            s([p.ObservableComponent.field], e.prototype, 'billboard', void 0),
            s([p.ObservableComponent.field], e.prototype, 'visible', void 0),
            (e = s([p.Component('engine.text', a.TEXT_SHAPE)], e))
          )
        })(p.ObservableComponent)
      ;(e.TextShape = I),
        (function(t) {
          ;(t[(t.OPAQUE = 0)] = 'OPAQUE'),
            (t[(t.ALPHA_TEST = 1)] = 'ALPHA_TEST'),
            (t[(t.ALPHA_BLEND = 2)] = 'ALPHA_BLEND'),
            (t[(t.ALPHA_TEST_AND_BLEND = 3)] = 'ALPHA_TEST_AND_BLEND'),
            (t[(t.AUTO = 4)] = 'AUTO')
        })((P = e.TransparencyMode || (e.TransparencyMode = {})))
      var z = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.alphaTest = 0.5), (e.castShadows = !0), (e.transparencyMode = P.AUTO), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.field], e.prototype, 'alphaTest', void 0),
          s([p.ObservableComponent.field], e.prototype, 'albedoColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'emissiveColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'metallic', void 0),
          s([p.ObservableComponent.field], e.prototype, 'roughness', void 0),
          s([p.ObservableComponent.field], e.prototype, 'ambientColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'reflectionColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'reflectivityColor', void 0),
          s([p.ObservableComponent.field], e.prototype, 'directIntensity', void 0),
          s([p.ObservableComponent.field], e.prototype, 'microSurface', void 0),
          s([p.ObservableComponent.field], e.prototype, 'emissiveIntensity', void 0),
          s([p.ObservableComponent.field], e.prototype, 'environmentIntensity', void 0),
          s([p.ObservableComponent.field], e.prototype, 'specularIntensity', void 0),
          s([p.ObservableComponent.component], e.prototype, 'albedoTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'alphaTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'emissiveTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'bumpTexture', void 0),
          s([p.ObservableComponent.component], e.prototype, 'refractionTexture', void 0),
          s([p.ObservableComponent.field], e.prototype, 'castShadows', void 0),
          s([p.ObservableComponent.field], e.prototype, 'transparencyMode', void 0),
          (e = s([p.DisposableComponent('engine.material', a.PBR_MATERIAL)], e))
        )
      })(p.ObservableComponent)
      e.Material = z
      var M = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.alphaTest = 0.5), (e.castShadows = !0), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.component], e.prototype, 'texture', void 0),
          s([p.ObservableComponent.field], e.prototype, 'alphaTest', void 0),
          s([p.ObservableComponent.field], e.prototype, 'castShadows', void 0),
          (e = s([p.DisposableComponent('engine.material', a.BASIC_MATERIAL)], e))
        )
      })(p.ObservableComponent)
      e.BasicMaterial = M
      var D = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          if (((n.uuid = c.newId('UUID')), !e || !('apply' in e) || !('call' in e))) throw new Error('Callback is not a function')
          return (n.callback = e), n
        }
        return (
          r(e, t),
          (e.uuidEvent = function(t, n) {
            if (delete t[n]) {
              var o = n + '_' + Math.random()
              ;(t[o] = void 0),
                Object.defineProperty(t, o, i(i({}, Object.getOwnPropertyDescriptor(t, o)), { enumerable: !1 })),
                Object.defineProperty(t, n.toString(), {
                  get: function() {
                    return this[o]
                  },
                  set: function(t) {
                    var r = this[o]
                    if (t) {
                      if (!(t instanceof e)) throw new Error('value is not an OnUUIDEvent')
                      this.data[n] = t.uuid
                    } else this.data[n] = null
                    if (((this[o] = t), t !== r)) {
                      this.dirty = !0
                      for (var i = 0; i < this.subscriptions.length; i++) this.subscriptions[i](n, t, r)
                    }
                  },
                  enumerable: !0
                })
            }
          }),
          (e.prototype.toJSON = function() {
            return { uuid: this.uuid, type: this.type }
          }),
          s([p.ObservableComponent.field], e.prototype, 'callback', void 0),
          e
        )
      })(p.ObservableComponent)
      e.OnUUIDEvent = D
      var F = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.button = h.ActionButton.ANY), (e.hoverText = 'Interact'), (e.distance = 10), (e.showFeedback = !0), e
        }
        return (
          r(e, t),
          (e.prototype.toJSON = function() {
            return {
              uuid: this.uuid,
              type: this.type,
              button: this.button,
              hoverText: this.hoverText,
              distance: this.distance,
              showFeedback: this.showFeedback
            }
          }),
          s([p.ObservableComponent.field], e.prototype, 'button', void 0),
          s([p.ObservableComponent.field], e.prototype, 'hoverText', void 0),
          s([p.ObservableComponent.field], e.prototype, 'distance', void 0),
          s([p.ObservableComponent.field], e.prototype, 'showFeedback', void 0),
          e
        )
      })(D)
      e.OnPointerUUIDEvent = F
      var U = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.type = 'onPointerLock'), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = s([p.Component('engine.onPointerLock', a.UUID_CALLBACK)], e))
        )
      })(D)
      e.OnPointerLock = U
      var L = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.type = 'onAnimationEnd'), e
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = s([p.Component('engine.onAnimationEnd', a.UUID_CALLBACK)], e))
        )
      })(D)
      e.OnAnimationEnd = L
      var N = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([p.Component('engine.smartItem', a.SMART_ITEM)], e))
      })(p.ObservableComponent)
      e.SmartItem = N
      var V = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          return (n.url = e), n
        }
        return (
          r(e, t),
          s([p.ObservableComponent.readonly], e.prototype, 'url', void 0),
          (e = s([p.DisposableComponent('engine.VideoClip', a.VIDEO_CLIP)], e))
        )
      })(p.ObservableComponent)
      e.VideoClip = V
      var j = (function(t) {
        function e(e, n) {
          var o = t.call(this) || this
          if (((o.volume = 1), (o.playbackRate = 1), (o.loop = !1), (o.seek = -1), (o.playing = !1), !(e instanceof V)))
            throw new Error('Trying to create VideoTexture(VideoClip) with an invalid VideoClip')
          if (((o.videoClipId = p.getComponentId(e)), n))
            for (var r in n) {
              o[r] = n[r]
            }
          return o
        }
        return (
          r(e, t),
          (e.prototype.play = function() {
            this.playing = !0
          }),
          (e.prototype.pause = function() {
            this.playing = !1
          }),
          (e.prototype.reset = function() {
            this.seekTime(0)
          }),
          (e.prototype.seekTime = function(t) {
            ;(this.seek = t), (this.dirty = !0), (this.data.nonce = Math.random())
          }),
          (e.prototype.toJSON = function() {
            if (this.seek < 0) return t.prototype.toJSON.call(this)
            var e = JSON.parse(JSON.stringify(t.prototype.toJSON.call(this)))
            return (this.seek = -1), e
          }),
          s([p.ObservableComponent.readonly], e.prototype, 'videoClipId', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'samplingMode', void 0),
          s([p.ObservableComponent.readonly], e.prototype, 'wrap', void 0),
          s([p.ObservableComponent.field], e.prototype, 'volume', void 0),
          s([p.ObservableComponent.field], e.prototype, 'playbackRate', void 0),
          s([p.ObservableComponent.field], e.prototype, 'loop', void 0),
          s([p.ObservableComponent.field], e.prototype, 'seek', void 0),
          s([p.ObservableComponent.field], e.prototype, 'playing', void 0),
          (e = s([p.DisposableComponent('engine.VideoTexture', a.VIDEO_TEXTURE)], e))
        )
      })(p.ObservableComponent)
      e.VideoTexture = j
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function(t, e, n, o) {
                void 0 === o && (o = n),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function() {
                      return e[n]
                    }
                  })
              }
            : function(t, e, n, o) {
                void 0 === o && (o = n), (t[o] = e[n])
              }),
        r =
          (this && this.__exportStar) ||
          function(t, e) {
            for (var n in t) 'default' === n || Object.prototype.hasOwnProperty.call(e, n) || o(e, t, n)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        r(n(2), e),
        r(n(9), e),
        r(n(22), e),
        r(n(23), e),
        r(n(36), e),
        r(n(37), e),
        r(n(38), e),
        r(n(24), e),
        r(n(39), e),
        r(n(40), e),
        r(n(11), e),
        r(n(41), e),
        r(n(42), e),
        r(n(25), e),
        r(n(10), e),
        r(n(6), e),
        r(n(43), e),
        r(n(15), e),
        r(n(3), e),
        r(n(21), e),
        r(n(5), e)
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Scalar = void 0)
      var o = (function() {
        function t() {}
        return (
          (t.WithinEpsilon = function(t, e, n) {
            void 0 === n && (n = 1401298e-51)
            var o = t - e
            return -n <= o && o <= n
          }),
          (t.ToHex = function(t) {
            var e = t.toString(16)
            return t <= 15 ? ('0' + e).toUpperCase() : e.toUpperCase()
          }),
          (t.Sign = function(t) {
            var e = +t
            return 0 === e || isNaN(e) ? e : e > 0 ? 1 : -1
          }),
          (t.Clamp = function(t, e, n) {
            return void 0 === e && (e = 0), void 0 === n && (n = 1), Math.min(n, Math.max(e, t))
          }),
          (t.Log2 = function(t) {
            return Math.log(t) * Math.LOG2E
          }),
          (t.Repeat = function(t, e) {
            return t - Math.floor(t / e) * e
          }),
          (t.Normalize = function(t, e, n) {
            return (t - e) / (n - e)
          }),
          (t.Denormalize = function(t, e, n) {
            return t * (n - e) + e
          }),
          (t.DeltaAngle = function(e, n) {
            var o = t.Repeat(n - e, 360)
            return o > 180 && (o -= 360), o
          }),
          (t.PingPong = function(e, n) {
            var o = t.Repeat(e, 2 * n)
            return n - Math.abs(o - n)
          }),
          (t.SmoothStep = function(e, n, o) {
            var r = t.Clamp(o)
            return n * (r = -2 * r * r * r + 3 * r * r) + e * (1 - r)
          }),
          (t.MoveTowards = function(e, n, o) {
            return Math.abs(n - e) <= o ? n : e + t.Sign(n - e) * o
          }),
          (t.MoveTowardsAngle = function(e, n, o) {
            var r = t.DeltaAngle(e, n)
            return -o < r && r < o ? n : t.MoveTowards(e, e + r, o)
          }),
          (t.Lerp = function(t, e, n) {
            return t + (e - t) * n
          }),
          (t.LerpAngle = function(e, n, o) {
            var r = t.Repeat(n - e, 360)
            return r > 180 && (r -= 360), e + r * t.Clamp(o)
          }),
          (t.InverseLerp = function(e, n, o) {
            return e !== n ? t.Clamp((o - e) / (n - e)) : 0
          }),
          (t.Hermite = function(t, e, n, o, r) {
            var i = r * r,
              s = r * i
            return t * (2 * s - 3 * i + 1) + n * (-2 * s + 3 * i) + e * (s - 2 * i + r) + o * (s - i)
          }),
          (t.RandomRange = function(t, e) {
            return t === e ? t : Math.random() * (e - t) + t
          }),
          (t.RangeToPercent = function(t, e, n) {
            return (t - e) / (n - e)
          }),
          (t.PercentToRange = function(t, e, n) {
            return (n - e) * t + e
          }),
          (t.NormalizeRadians = function(e) {
            return e - t.TwoPi * Math.floor((e + Math.PI) / t.TwoPi)
          }),
          (t.TwoPi = 2 * Math.PI),
          t
        )
      })()
      e.Scalar = o
    },
    function(t, e, n) {
      'use strict'
      var o =
        (this && this.__decorate) ||
        function(t, e, n, o) {
          var r,
            i = arguments.length,
            s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
          else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
          return i > 3 && s && Object.defineProperty(e, n, s), s
        }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.ParentChanged = e.ComponentAdded = e.ComponentRemoved = void 0)
      var r = n(8),
        i = (function() {
          function t(t, e, n) {
            ;(this.entity = t), (this.componentName = e), (this.component = n)
          }
          return (t = o([r.EventConstructor()], t))
        })()
      e.ComponentRemoved = i
      var s = (function() {
        function t(t, e, n) {
          ;(this.entity = t), (this.componentName = e), (this.classId = n)
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.ComponentAdded = s
      var a = (function() {
        function t(t, e) {
          ;(this.entity = t), (this.parent = e)
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.ParentChanged = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.EventConstructor = e.EventManager = void 0)
      var o = n(1),
        r = []
      function i(t) {
        if (!('__event_name__' in t) || 'string' != typeof t.__event_name__) throw new Error('The EventConstructor is not registered')
        return t.__event_name__
      }
      var s = (function() {
        function t() {
          this.listeners = {}
        }
        return (
          (t.prototype.addListener = function(t, e, n) {
            if (!t || 'function' != typeof t) throw new Error('Invalid EventConstructor')
            var o = i(t),
              r = this.listeners[o]
            r || (r = this.listeners[o] = [])
            for (var s = 0; s < r.length; s++) {
              if (r[s].listener === e) throw new Error('The provided listener is already registered')
            }
            return r.push({ listener: e, fn: n }), this
          }),
          (t.prototype.removeListener = function(t, e) {
            if (!e || 'function' != typeof e) throw new Error('Invalid EventConstructor')
            var n = i(e),
              o = this.listeners[n]
            if (!o) return !1
            for (var r = 0; r < o.length; r++) {
              if (o[r].listener === t) return o.splice(r, 1), !0
            }
            return !1
          }),
          (t.prototype.fireEvent = function(t) {
            var e = i(t.constructor),
              n = this.listeners[e]
            if (n)
              for (var r = 0; r < n.length; r++)
                try {
                  var s = n[r]
                  s.fn.call(s.listener, t)
                } catch (t) {
                  o.error(t)
                }
            return this
          }),
          t
        )
      })()
      ;(e.EventManager = s),
        (e.EventConstructor = function() {
          var t = o.newId('EV')
          if (-1 !== r.indexOf(t)) throw new Error('The event name ' + t + ' is already taken')
          return (
            r.push(t),
            function(e) {
              return (e.__event_name__ = t), e
            }
          )
        })
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.MathTmp = void 0)
      var o = n(1),
        r = n(3),
        i = n(10),
        s = n(11)
      e.MathTmp = {
        Vector3: o.buildArray(6, r.Vector3.Zero),
        Matrix: o.buildArray(2, s.Matrix.Identity),
        Quaternion: o.buildArray(3, i.Quaternion.Zero),
        staticUp: r.Vector3.Up(),
        tmpMatrix: s.Matrix.Zero()
      }
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Quaternion = void 0)
      var o = n(11),
        r = n(3),
        i = n(9),
        s = n(2),
        a = (function() {
          function t(t, e, n, o) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              void 0 === o && (o = 1),
              (this.x = t),
              (this.y = e),
              (this.z = n),
              (this.w = o)
          }
          return (
            (t.FromRotationMatrix = function(e) {
              var n = new t()
              return t.FromRotationMatrixToRef(e, n), n
            }),
            (t.FromRotationMatrixToRef = function(t, e) {
              var n,
                o = t.m,
                r = o[0],
                i = o[4],
                s = o[8],
                a = o[1],
                p = o[5],
                u = o[9],
                l = o[2],
                c = o[6],
                h = o[10],
                d = r + p + h
              d > 0
                ? ((n = 0.5 / Math.sqrt(d + 1)), (e.w = 0.25 / n), (e.x = (c - u) * n), (e.y = (s - l) * n), (e.z = (a - i) * n))
                : r > p && r > h
                ? ((n = 2 * Math.sqrt(1 + r - p - h)), (e.w = (c - u) / n), (e.x = 0.25 * n), (e.y = (i + a) / n), (e.z = (s + l) / n))
                : p > h
                ? ((n = 2 * Math.sqrt(1 + p - r - h)), (e.w = (s - l) / n), (e.x = (i + a) / n), (e.y = 0.25 * n), (e.z = (u + c) / n))
                : ((n = 2 * Math.sqrt(1 + h - r - p)), (e.w = (a - i) / n), (e.x = (s + l) / n), (e.y = (u + c) / n), (e.z = 0.25 * n))
            }),
            (t.Dot = function(t, e) {
              return t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w
            }),
            (t.AreClose = function(e, n) {
              return t.Dot(e, n) >= 0
            }),
            (t.Zero = function() {
              return new t(0, 0, 0, 0)
            }),
            (t.Inverse = function(e) {
              return new t(-e.x, -e.y, -e.z, e.w)
            }),
            (t.IsIdentity = function(t) {
              return t && 0 === t.x && 0 === t.y && 0 === t.z && 1 === t.w
            }),
            (t.RotationAxis = function(e, n) {
              var o = n * s.DEG2RAD
              return t.RotationAxisToRef(e, o, new t())
            }),
            (t.RotationAxisToRef = function(t, e, n) {
              var o = e * s.DEG2RAD,
                r = Math.sin(o / 2)
              return t.normalize(), (n.w = Math.cos(o / 2)), (n.x = t.x * r), (n.y = t.y * r), (n.z = t.z * r), n
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2], e[n + 3])
            }),
            (t.FromEulerAnglesRef = function(e, n, o, r) {
              return t.RotationYawPitchRollToRef(n * s.DEG2RAD, e * s.DEG2RAD, o * s.DEG2RAD, r)
            }),
            (t.RotationYawPitchRoll = function(e, n, o) {
              var r = new t()
              return t.RotationYawPitchRollToRef(e, n, o, r), r
            }),
            (t.RotationYawPitchRollToRef = function(t, e, n, o) {
              var r = 0.5 * n,
                i = 0.5 * e,
                s = 0.5 * t,
                a = Math.cos(i),
                p = Math.cos(s),
                u = Math.cos(r),
                l = Math.sin(i),
                c = Math.sin(s),
                h = Math.sin(r)
              ;(o.x = l * p * u + a * c * h), (o.y = a * c * u - l * p * h), (o.z = a * p * h + l * c * u), (o.w = a * p * u - l * c * h)
            }),
            (t.RotationAlphaBetaGamma = function(e, n, o) {
              var r = new t()
              return t.RotationAlphaBetaGammaToRef(e, n, o, r), r
            }),
            (t.RotationAlphaBetaGammaToRef = function(t, e, n, o) {
              var r = 0.5 * (n + t),
                i = 0.5 * (n - t),
                s = 0.5 * e
              ;(o.x = Math.cos(i) * Math.sin(s)),
                (o.y = Math.sin(i) * Math.sin(s)),
                (o.z = Math.sin(r) * Math.cos(s)),
                (o.w = Math.cos(r) * Math.cos(s))
            }),
            (t.RotationQuaternionFromAxis = function(e, n, o) {
              var r = new t(0, 0, 0, 0)
              return t.RotationQuaternionFromAxisToRef(e, n, o, r), r
            }),
            (t.RotationQuaternionFromAxisToRef = function(e, n, r, s) {
              var a = i.MathTmp.Matrix[0]
              o.Matrix.FromXYZAxesToRef(e.normalize(), n.normalize(), r.normalize(), a), t.FromRotationMatrixToRef(a, s)
            }),
            (t.Slerp = function(e, n, o) {
              var r = t.Identity
              return t.SlerpToRef(e, n, o, r), r
            }),
            (t.SlerpToRef = function(t, e, n, o) {
              var r,
                i,
                s = t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w,
                a = !1
              if ((s < 0 && ((a = !0), (s = -s)), s > 0.999999)) (i = 1 - n), (r = a ? -n : n)
              else {
                var p = Math.acos(s),
                  u = 1 / Math.sin(p)
                ;(i = Math.sin((1 - n) * p) * u), (r = a ? -Math.sin(n * p) * u : Math.sin(n * p) * u)
              }
              ;(o.x = i * t.x + r * e.x), (o.y = i * t.y + r * e.y), (o.z = i * t.z + r * e.z), (o.w = i * t.w + r * e.w)
            }),
            (t.Hermite = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s,
                p = 2 * a - 3 * s + 1,
                u = -2 * a + 3 * s,
                l = a - 2 * s + i,
                c = a - s
              return new t(
                e.x * p + o.x * u + n.x * l + r.x * c,
                e.y * p + o.y * u + n.y * l + r.y * c,
                e.z * p + o.z * u + n.z * l + r.z * c,
                e.w * p + o.w * u + n.w * l + r.w * c
              )
            }),
            Object.defineProperty(t, 'Identity', {
              get: function() {
                return new t(0, 0, 0, 1)
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.Angle = function(e, n) {
              var o = t.Dot(e, n)
              return 2 * Math.acos(Math.min(Math.abs(o), 1)) * s.RAD2DEG
            }),
            (t.Euler = function(e, n, o) {
              return t.RotationYawPitchRoll(n * s.DEG2RAD, e * s.DEG2RAD, o * s.DEG2RAD)
            }),
            (t.LookRotation = function(e, n) {
              void 0 === n && (n = i.MathTmp.staticUp)
              var o = r.Vector3.Normalize(e),
                s = r.Vector3.Normalize(r.Vector3.Cross(n, o)),
                a = r.Vector3.Cross(o, s),
                p = s.x,
                u = s.y,
                l = s.z,
                c = a.x,
                h = a.y,
                d = a.z,
                f = o.x,
                y = o.y,
                v = o.z,
                m = p + h + v,
                b = new t()
              if (m > 0) {
                var g = Math.sqrt(m + 1)
                return (b.w = 0.5 * g), (g = 0.5 / g), (b.x = (d - y) * g), (b.y = (f - l) * g), (b.z = (u - c) * g), b
              }
              if (p >= h && p >= v) {
                var _ = Math.sqrt(1 + p - h - v),
                  C = 0.5 / _
                return (b.x = 0.5 * _), (b.y = (u + c) * C), (b.z = (l + f) * C), (b.w = (d - y) * C), b
              }
              if (h > v) {
                var O = Math.sqrt(1 + h - p - v),
                  x = 0.5 / O
                return (b.x = (c + u) * x), (b.y = 0.5 * O), (b.z = (y + d) * x), (b.w = (f - l) * x), b
              }
              var w = Math.sqrt(1 + v - p - h),
                T = 0.5 / w
              return (b.x = (f + l) * T), (b.y = (y + d) * T), (b.z = 0.5 * w), (b.w = (u - c) * T), b
            }),
            (t.RotateTowards = function(e, n, o) {
              var r = t.Angle(e, n)
              if (0 === r) return n
              var i = Math.min(1, o / r)
              return t.Slerp(e, n, i)
            }),
            (t.FromToRotation = function(e, n) {
              var o = new t(),
                i = e.normalize(),
                a = n.normalize(),
                p = r.Vector3.Dot(i, a)
              if (p > -1 + s.Epsilon) {
                var u = Math.sqrt(2 * (1 + p)),
                  l = 1 / u,
                  c = r.Vector3.Cross(i, a).scaleInPlace(l)
                o.set(c.x, c.y, c.z, 0.5 * u)
              } else {
                if (p > 1 - s.Epsilon) return new t(0, 0, 0, 1)
                var h = r.Vector3.Cross(r.Vector3.Right(), i)
                h.lengthSquared() < s.Epsilon && (h = r.Vector3.Cross(r.Vector3.Forward(), i)), o.set(h.x, h.y, h.z, 0)
              }
              return o.normalize()
            }),
            Object.defineProperty(t.prototype, 'normalized', {
              get: function() {
                return this.normalize()
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.setFromToRotation = function(e, n, r) {
              void 0 === r && (r = i.MathTmp.staticUp),
                (i.MathTmp.tmpMatrix = o.Matrix.Zero()),
                o.Matrix.LookAtLHToRef(e, n, r, i.MathTmp.tmpMatrix),
                i.MathTmp.tmpMatrix.invert(),
                t.FromRotationMatrixToRef(i.MathTmp.tmpMatrix, this)
            }),
            Object.defineProperty(t.prototype, 'eulerAngles', {
              get: function() {
                var t = new r.Vector3(),
                  e = new o.Matrix()
                this.toRotationMatrix(e)
                var n = o.Matrix.GetAsMatrix3x3(e)
                return (
                  (t.y = s.RAD2DEG * Math.asin(Math.max(-1, Math.min(1, n[6])))),
                  Math.abs(n[6]) < 0.99999
                    ? ((t.x = s.RAD2DEG * Math.atan2(-n[7], n[8])), (t.z = s.RAD2DEG * Math.atan2(-n[3], n[0])))
                    : ((t.x = s.RAD2DEG * Math.atan2(n[5], n[4])), (t.z = 0)),
                  t
                )
              },
              set: function(t) {
                this.setEuler(t.x, t.y, t.z)
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.toString = function() {
              return '(' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ')'
            }),
            Object.defineProperty(t.prototype, 'length', {
              get: function() {
                return Math.sqrt(this.lengthSquared)
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'lengthSquared', {
              get: function() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.getClassName = function() {
              return 'Quaternion'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * (t = (397 * (t = (397 * t) ^ (this.y || 0))) ^ (this.z || 0))) ^ (this.w || 0))
            }),
            (t.prototype.asArray = function() {
              return [this.x, this.y, this.z, this.w]
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y && this.z === t.z && this.w === t.w
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y, this.z, this.w)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = t.w), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n, o) {
              return (this.x = t), (this.y = e), (this.z = n), (this.w = o), this
            }),
            (t.prototype.set = function(t, e, n, o) {
              return this.copyFromFloats(t, e, n, o)
            }),
            (t.prototype.setEuler = function(e, n, o) {
              return t.RotationYawPitchRollToRef(n * s.DEG2RAD, e * s.DEG2RAD, o * s.DEG2RAD, this), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y, this.z + e.z, this.w + e.w)
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y, this.z - e.z, this.w - e.w)
            }),
            (t.prototype.scale = function(e) {
              return new t(this.x * e, this.y * e, this.z * e, this.w * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.x = this.x * t), (e.y = this.y * t), (e.z = this.z * t), (e.w = this.w * t), this
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.x += this.x * t), (e.y += this.y * t), (e.z += this.z * t), (e.w += this.w * t), this
            }),
            (t.prototype.multiply = function(e) {
              var n = new t(0, 0, 0, 1)
              return this.multiplyToRef(e, n), n
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              var n = this.x * t.w + this.y * t.z - this.z * t.y + this.w * t.x,
                o = -this.x * t.z + this.y * t.w + this.z * t.x + this.w * t.y,
                r = this.x * t.y - this.y * t.x + this.z * t.w + this.w * t.z,
                i = -this.x * t.x - this.y * t.y - this.z * t.z + this.w * t.w
              return e.copyFromFloats(n, o, r, i), this
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return this.multiplyToRef(t, this), this
            }),
            (t.prototype.conjugateToRef = function(t) {
              return t.copyFromFloats(-this.x, -this.y, -this.z, this.w), this
            }),
            (t.prototype.conjugateInPlace = function() {
              return (this.x *= -1), (this.y *= -1), (this.z *= -1), this
            }),
            (t.prototype.conjugate = function() {
              return new t(-this.x, -this.y, -this.z, this.w)
            }),
            (t.prototype.normalize = function() {
              var t = 1 / this.length
              return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
            }),
            (t.prototype.angleAxis = function(e, n) {
              if (0 === n.lengthSquared()) return t.Identity
              var o = t.Identity,
                r = e * s.DEG2RAD
              r *= 0.5
              var i = n.normalize()
              return (i = n.scaleInPlace(Math.sin(r))), (o.x = i.x), (o.y = i.y), (o.z = i.z), (o.w = Math.cos(r)), o.normalize()
            }),
            (t.prototype.toRotationMatrix = function(t) {
              return o.Matrix.FromQuaternionToRef(this, t), this
            }),
            (t.prototype.fromRotationMatrix = function(e) {
              return t.FromRotationMatrixToRef(e, this), this
            }),
            t
          )
        })()
      e.Quaternion = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Matrix = void 0)
      var o = n(3),
        r = n(10),
        i = n(9),
        s = n(21),
        a = (function() {
          function t() {
            ;(this._isIdentity = !1),
              (this._isIdentityDirty = !0),
              (this._isIdentity3x2 = !0),
              (this._isIdentity3x2Dirty = !0),
              (this._m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
              this._updateIdentityStatus(!1)
          }
          return (
            Object.defineProperty(t.prototype, 'm', {
              get: function() {
                return this._m
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t, 'IdentityReadOnly', {
              get: function() {
                return t._identityReadOnly
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.FromArray = function(e, n) {
              void 0 === n && (n = 0)
              var o = new t()
              return t.FromArrayToRef(e, n, o), o
            }),
            (t.FromArrayToRef = function(t, e, n) {
              for (var o = 0; o < 16; o++) n._m[o] = t[o + e]
              n._markAsUpdated()
            }),
            (t.FromFloatArrayToRefScaled = function(t, e, n, o) {
              for (var r = 0; r < 16; r++) o._m[r] = t[r + e] * n
              o._markAsUpdated()
            }),
            (t.FromValuesToRef = function(t, e, n, o, r, i, s, a, p, u, l, c, h, d, f, y, v) {
              var m = v._m
              ;(m[0] = t),
                (m[1] = e),
                (m[2] = n),
                (m[3] = o),
                (m[4] = r),
                (m[5] = i),
                (m[6] = s),
                (m[7] = a),
                (m[8] = p),
                (m[9] = u),
                (m[10] = l),
                (m[11] = c),
                (m[12] = h),
                (m[13] = d),
                (m[14] = f),
                (m[15] = y),
                v._markAsUpdated()
            }),
            (t.FromValues = function(e, n, o, r, i, s, a, p, u, l, c, h, d, f, y, v) {
              var m = new t(),
                b = m._m
              return (
                (b[0] = e),
                (b[1] = n),
                (b[2] = o),
                (b[3] = r),
                (b[4] = i),
                (b[5] = s),
                (b[6] = a),
                (b[7] = p),
                (b[8] = u),
                (b[9] = l),
                (b[10] = c),
                (b[11] = h),
                (b[12] = d),
                (b[13] = f),
                (b[14] = y),
                (b[15] = v),
                m._markAsUpdated(),
                m
              )
            }),
            (t.Compose = function(e, n, o) {
              var r = new t()
              return t.ComposeToRef(e, n, o, r), r
            }),
            (t.ComposeToRef = function(e, n, o, r) {
              t.ScalingToRef(e.x, e.y, e.z, i.MathTmp.Matrix[1]),
                n.toRotationMatrix(i.MathTmp.Matrix[0]),
                i.MathTmp.Matrix[1].multiplyToRef(i.MathTmp.Matrix[0], r),
                r.setTranslation(o)
            }),
            (t.Identity = function() {
              var e = t.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
              return e._updateIdentityStatus(!0), e
            }),
            (t.IdentityToRef = function(e) {
              t.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, e), e._updateIdentityStatus(!0)
            }),
            (t.Zero = function() {
              var e = t.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
              return e._updateIdentityStatus(!1), e
            }),
            (t.RotationX = function(e) {
              var n = new t()
              return t.RotationXToRef(e, n), n
            }),
            (t.Invert = function(e) {
              var n = new t()
              return e.invertToRef(n), n
            }),
            (t.RotationXToRef = function(e, n) {
              var o = Math.sin(e),
                r = Math.cos(e)
              t.FromValuesToRef(1, 0, 0, 0, 0, r, o, 0, 0, -o, r, 0, 0, 0, 0, 1, n), n._updateIdentityStatus(1 === r && 0 === o)
            }),
            (t.RotationY = function(e) {
              var n = new t()
              return t.RotationYToRef(e, n), n
            }),
            (t.RotationYToRef = function(e, n) {
              var o = Math.sin(e),
                r = Math.cos(e)
              t.FromValuesToRef(r, 0, -o, 0, 0, 1, 0, 0, o, 0, r, 0, 0, 0, 0, 1, n), n._updateIdentityStatus(1 === r && 0 === o)
            }),
            (t.RotationZ = function(e) {
              var n = new t()
              return t.RotationZToRef(e, n), n
            }),
            (t.RotationZToRef = function(e, n) {
              var o = Math.sin(e),
                r = Math.cos(e)
              t.FromValuesToRef(r, o, 0, 0, -o, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, n), n._updateIdentityStatus(1 === r && 0 === o)
            }),
            (t.RotationAxis = function(e, n) {
              var o = new t()
              return t.RotationAxisToRef(e, n, o), o
            }),
            (t.RotationAxisToRef = function(t, e, n) {
              var o = Math.sin(-e),
                r = Math.cos(-e),
                i = 1 - r
              t.normalize()
              var s = n._m
              ;(s[0] = t.x * t.x * i + r),
                (s[1] = t.x * t.y * i - t.z * o),
                (s[2] = t.x * t.z * i + t.y * o),
                (s[3] = 0),
                (s[4] = t.y * t.x * i + t.z * o),
                (s[5] = t.y * t.y * i + r),
                (s[6] = t.y * t.z * i - t.x * o),
                (s[7] = 0),
                (s[8] = t.z * t.x * i - t.y * o),
                (s[9] = t.z * t.y * i + t.x * o),
                (s[10] = t.z * t.z * i + r),
                (s[11] = 0),
                (s[12] = 0),
                (s[13] = 0),
                (s[14] = 0),
                (s[15] = 1),
                n._markAsUpdated()
            }),
            (t.RotationYawPitchRoll = function(e, n, o) {
              var r = new t()
              return t.RotationYawPitchRollToRef(e, n, o, r), r
            }),
            (t.RotationYawPitchRollToRef = function(t, e, n, o) {
              r.Quaternion.RotationYawPitchRollToRef(t, e, n, i.MathTmp.Quaternion[0]), i.MathTmp.Quaternion[0].toRotationMatrix(o)
            }),
            (t.Scaling = function(e, n, o) {
              var r = new t()
              return t.ScalingToRef(e, n, o, r), r
            }),
            (t.ScalingToRef = function(e, n, o, r) {
              t.FromValuesToRef(e, 0, 0, 0, 0, n, 0, 0, 0, 0, o, 0, 0, 0, 0, 1, r), r._updateIdentityStatus(1 === e && 1 === n && 1 === o)
            }),
            (t.Translation = function(e, n, o) {
              var r = new t()
              return t.TranslationToRef(e, n, o, r), r
            }),
            (t.TranslationToRef = function(e, n, o, r) {
              t.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, n, o, 1, r), r._updateIdentityStatus(0 === e && 0 === n && 0 === o)
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t()
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              for (var r = 0; r < 16; r++) o._m[r] = t._m[r] * (1 - n) + e._m[r] * n
              o._markAsUpdated()
            }),
            (t.DecomposeLerp = function(e, n, o) {
              var r = new t()
              return t.DecomposeLerpToRef(e, n, o, r), r
            }),
            (t.DecomposeLerpToRef = function(e, n, s, a) {
              var p = i.MathTmp.Vector3[0],
                u = i.MathTmp.Quaternion[0],
                l = i.MathTmp.Vector3[1]
              e.decompose(p, u, l)
              var c = i.MathTmp.Vector3[2],
                h = i.MathTmp.Quaternion[1],
                d = i.MathTmp.Vector3[3]
              n.decompose(c, h, d)
              var f = i.MathTmp.Vector3[4]
              o.Vector3.LerpToRef(p, c, s, f)
              var y = i.MathTmp.Quaternion[2]
              r.Quaternion.SlerpToRef(u, h, s, y)
              var v = i.MathTmp.Vector3[5]
              o.Vector3.LerpToRef(l, d, s, v), t.ComposeToRef(f, y, v, a)
            }),
            (t.LookAtLH = function(e, n, o) {
              var r = new t()
              return t.LookAtLHToRef(e, n, o, r), r
            }),
            (t.LookAtLHToRef = function(e, n, r, s) {
              var a = i.MathTmp.Vector3[0],
                p = i.MathTmp.Vector3[1],
                u = i.MathTmp.Vector3[2]
              n.subtractToRef(e, u), u.normalize(), o.Vector3.CrossToRef(r, u, a)
              var l = a.lengthSquared()
              0 === l ? (a.x = 1) : a.normalizeFromLength(Math.sqrt(l)), o.Vector3.CrossToRef(u, a, p), p.normalize()
              var c = -o.Vector3.Dot(a, e),
                h = -o.Vector3.Dot(p, e),
                d = -o.Vector3.Dot(u, e)
              t.FromValuesToRef(a.x, p.x, u.x, 0, a.y, p.y, u.y, 0, a.z, p.z, u.z, 0, c, h, d, 1, s)
            }),
            (t.LookAtRH = function(e, n, o) {
              var r = new t()
              return t.LookAtRHToRef(e, n, o, r), r
            }),
            (t.LookAtRHToRef = function(e, n, r, s) {
              var a = i.MathTmp.Vector3[0],
                p = i.MathTmp.Vector3[1],
                u = i.MathTmp.Vector3[2]
              e.subtractToRef(n, u), u.normalize(), o.Vector3.CrossToRef(r, u, a)
              var l = a.lengthSquared()
              0 === l ? (a.x = 1) : a.normalizeFromLength(Math.sqrt(l)), o.Vector3.CrossToRef(u, a, p), p.normalize()
              var c = -o.Vector3.Dot(a, e),
                h = -o.Vector3.Dot(p, e),
                d = -o.Vector3.Dot(u, e)
              t.FromValuesToRef(a.x, p.x, u.x, 0, a.y, p.y, u.y, 0, a.z, p.z, u.z, 0, c, h, d, 1, s)
            }),
            (t.OrthoLH = function(e, n, o, r) {
              var i = new t()
              return t.OrthoLHToRef(e, n, o, r, i), i
            }),
            (t.OrthoLHToRef = function(e, n, o, r, i) {
              var s = 2 / e,
                a = 2 / n,
                p = 2 / (r - o),
                u = -(r + o) / (r - o)
              t.FromValuesToRef(s, 0, 0, 0, 0, a, 0, 0, 0, 0, p, 0, 0, 0, u, 1, i),
                i._updateIdentityStatus(1 === s && 1 === a && 1 === p && 0 === u)
            }),
            (t.OrthoOffCenterLH = function(e, n, o, r, i, s) {
              var a = new t()
              return t.OrthoOffCenterLHToRef(e, n, o, r, i, s, a), a
            }),
            (t.OrthoOffCenterLHToRef = function(e, n, o, r, i, s, a) {
              var p = 2 / (n - e),
                u = 2 / (r - o),
                l = 2 / (s - i),
                c = -(s + i) / (s - i),
                h = (e + n) / (e - n),
                d = (r + o) / (o - r)
              t.FromValuesToRef(p, 0, 0, 0, 0, u, 0, 0, 0, 0, l, 0, h, d, c, 1, a), a._markAsUpdated()
            }),
            (t.OrthoOffCenterRH = function(e, n, o, r, i, s) {
              var a = new t()
              return t.OrthoOffCenterRHToRef(e, n, o, r, i, s, a), a
            }),
            (t.OrthoOffCenterRHToRef = function(e, n, o, r, i, s, a) {
              t.OrthoOffCenterLHToRef(e, n, o, r, i, s, a), (a._m[10] *= -1)
            }),
            (t.PerspectiveLH = function(e, n, o, r) {
              var i = new t(),
                s = (2 * o) / e,
                a = (2 * o) / n,
                p = (r + o) / (r - o),
                u = (-2 * r * o) / (r - o)
              return t.FromValuesToRef(s, 0, 0, 0, 0, a, 0, 0, 0, 0, p, 1, 0, 0, u, 0, i), i._updateIdentityStatus(!1), i
            }),
            (t.PerspectiveFovLH = function(e, n, o, r) {
              var i = new t()
              return t.PerspectiveFovLHToRef(e, n, o, r, i), i
            }),
            (t.PerspectiveFovLHToRef = function(e, n, o, r, i, s) {
              void 0 === s && (s = !0)
              var a = o,
                p = r,
                u = 1 / Math.tan(0.5 * e),
                l = s ? u / n : u,
                c = s ? u : u * n,
                h = (p + a) / (p - a),
                d = (-2 * p * a) / (p - a)
              t.FromValuesToRef(l, 0, 0, 0, 0, c, 0, 0, 0, 0, h, 1, 0, 0, d, 0, i), i._updateIdentityStatus(!1)
            }),
            (t.PerspectiveFovRH = function(e, n, o, r) {
              var i = new t()
              return t.PerspectiveFovRHToRef(e, n, o, r, i), i
            }),
            (t.PerspectiveFovRHToRef = function(e, n, o, r, i, s) {
              void 0 === s && (s = !0)
              var a = o,
                p = r,
                u = 1 / Math.tan(0.5 * e),
                l = s ? u / n : u,
                c = s ? u : u * n,
                h = -(p + a) / (p - a),
                d = (-2 * p * a) / (p - a)
              t.FromValuesToRef(l, 0, 0, 0, 0, c, 0, 0, 0, 0, h, -1, 0, 0, d, 0, i), i._updateIdentityStatus(!1)
            }),
            (t.PerspectiveFovWebVRToRef = function(t, e, n, o, r) {
              void 0 === r && (r = !1)
              var i = r ? -1 : 1,
                s = Math.tan((t.upDegrees * Math.PI) / 180),
                a = Math.tan((t.downDegrees * Math.PI) / 180),
                p = Math.tan((t.leftDegrees * Math.PI) / 180),
                u = Math.tan((t.rightDegrees * Math.PI) / 180),
                l = 2 / (p + u),
                c = 2 / (s + a),
                h = o._m
              ;(h[0] = l),
                (h[1] = h[2] = h[3] = h[4] = 0),
                (h[5] = c),
                (h[6] = h[7] = 0),
                (h[8] = (p - u) * l * 0.5),
                (h[9] = -(s - a) * c * 0.5),
                (h[10] = -n / (e - n)),
                (h[11] = 1 * i),
                (h[12] = h[13] = h[15] = 0),
                (h[14] = (-2 * n * e) / (n - e)),
                o._markAsUpdated()
            }),
            (t.GetAsMatrix2x2 = function(t) {
              return [t._m[0], t._m[1], t._m[4], t._m[5]]
            }),
            (t.GetAsMatrix3x3 = function(t) {
              return [t._m[0], t._m[1], t._m[2], t._m[4], t._m[5], t._m[6], t._m[8], t._m[9], t._m[10]]
            }),
            (t.Transpose = function(e) {
              var n = new t()
              return t.TransposeToRef(e, n), n
            }),
            (t.TransposeToRef = function(t, e) {
              var n = e._m,
                o = t._m
              ;(n[0] = o[0]),
                (n[1] = o[4]),
                (n[2] = o[8]),
                (n[3] = o[12]),
                (n[4] = o[1]),
                (n[5] = o[5]),
                (n[6] = o[9]),
                (n[7] = o[13]),
                (n[8] = o[2]),
                (n[9] = o[6]),
                (n[10] = o[10]),
                (n[11] = o[14]),
                (n[12] = o[3]),
                (n[13] = o[7]),
                (n[14] = o[11]),
                (n[15] = o[15]),
                e._updateIdentityStatus(t._isIdentity, t._isIdentityDirty)
            }),
            (t.Reflection = function(e) {
              var n = new t()
              return t.ReflectionToRef(e, n), n
            }),
            (t.ReflectionToRef = function(e, n) {
              e.normalize()
              var o = e.normal.x,
                r = e.normal.y,
                i = e.normal.z,
                s = -2 * o,
                a = -2 * r,
                p = -2 * i
              t.FromValuesToRef(
                s * o + 1,
                a * o,
                p * o,
                0,
                s * r,
                a * r + 1,
                p * r,
                0,
                s * i,
                a * i,
                p * i + 1,
                0,
                s * e.d,
                a * e.d,
                p * e.d,
                1,
                n
              )
            }),
            (t.FromXYZAxesToRef = function(e, n, o, r) {
              t.FromValuesToRef(e.x, e.y, e.z, 0, n.x, n.y, n.z, 0, o.x, o.y, o.z, 0, 0, 0, 0, 1, r)
            }),
            (t.FromQuaternionToRef = function(t, e) {
              var n = t.x * t.x,
                o = t.y * t.y,
                r = t.z * t.z,
                i = t.x * t.y,
                s = t.z * t.w,
                a = t.z * t.x,
                p = t.y * t.w,
                u = t.y * t.z,
                l = t.x * t.w
              ;(e._m[0] = 1 - 2 * (o + r)),
                (e._m[1] = 2 * (i + s)),
                (e._m[2] = 2 * (a - p)),
                (e._m[3] = 0),
                (e._m[4] = 2 * (i - s)),
                (e._m[5] = 1 - 2 * (r + n)),
                (e._m[6] = 2 * (u + l)),
                (e._m[7] = 0),
                (e._m[8] = 2 * (a + p)),
                (e._m[9] = 2 * (u - l)),
                (e._m[10] = 1 - 2 * (o + n)),
                (e._m[11] = 0),
                (e._m[12] = 0),
                (e._m[13] = 0),
                (e._m[14] = 0),
                (e._m[15] = 1),
                e._markAsUpdated()
            }),
            (t.prototype._markAsUpdated = function() {
              ;(this.updateFlag = t._updateFlagSeed++),
                (this._isIdentity = !1),
                (this._isIdentity3x2 = !1),
                (this._isIdentityDirty = !0),
                (this._isIdentity3x2Dirty = !0)
            }),
            (t.prototype.isIdentity = function() {
              if (this._isIdentityDirty) {
                this._isIdentityDirty = !1
                var t = this._m
                this._isIdentity =
                  1 === t[0] &&
                  0 === t[1] &&
                  0 === t[2] &&
                  0 === t[3] &&
                  0 === t[4] &&
                  1 === t[5] &&
                  0 === t[6] &&
                  0 === t[7] &&
                  0 === t[8] &&
                  0 === t[9] &&
                  1 === t[10] &&
                  0 === t[11] &&
                  0 === t[12] &&
                  0 === t[13] &&
                  0 === t[14] &&
                  1 === t[15]
              }
              return this._isIdentity
            }),
            (t.prototype.isIdentityAs3x2 = function() {
              return (
                this._isIdentity3x2Dirty &&
                  ((this._isIdentity3x2Dirty = !1),
                  1 !== this._m[0] ||
                  1 !== this._m[5] ||
                  1 !== this._m[15] ||
                  0 !== this._m[1] ||
                  0 !== this._m[2] ||
                  0 !== this._m[3] ||
                  0 !== this._m[4] ||
                  0 !== this._m[6] ||
                  0 !== this._m[7] ||
                  0 !== this._m[8] ||
                  0 !== this._m[9] ||
                  0 !== this._m[10] ||
                  0 !== this._m[11] ||
                  0 !== this._m[12] ||
                  0 !== this._m[13] ||
                  0 !== this._m[14]
                    ? (this._isIdentity3x2 = !1)
                    : (this._isIdentity3x2 = !0)),
                this._isIdentity3x2
              )
            }),
            (t.prototype.determinant = function() {
              if (!0 === this._isIdentity) return 1
              var t = this._m,
                e = t[0],
                n = t[1],
                o = t[2],
                r = t[3],
                i = t[4],
                s = t[5],
                a = t[6],
                p = t[7],
                u = t[8],
                l = t[9],
                c = t[10],
                h = t[11],
                d = t[12],
                f = t[13],
                y = t[14],
                v = t[15],
                m = c * v - y * h,
                b = l * v - f * h,
                g = l * y - f * c,
                _ = u * v - d * h,
                C = u * y - c * d,
                O = u * f - d * l
              return (
                e * +(s * m - a * b + p * g) + n * -(i * m - a * _ + p * C) + o * +(i * b - s * _ + p * O) + r * -(i * g - s * C + a * O)
              )
            }),
            (t.prototype.toArray = function() {
              return this._m
            }),
            (t.prototype.asArray = function() {
              return this._m
            }),
            (t.prototype.invert = function() {
              return this.invertToRef(this), this
            }),
            (t.prototype.reset = function() {
              return t.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
            }),
            (t.prototype.add = function(e) {
              var n = new t()
              return this.addToRef(e, n), n
            }),
            (t.prototype.addToRef = function(t, e) {
              for (var n = 0; n < 16; n++) e._m[n] = this._m[n] + t._m[n]
              return e._markAsUpdated(), this
            }),
            (t.prototype.addToSelf = function(t) {
              for (var e = 0; e < 16; e++) this._m[e] += t._m[e]
              return this._markAsUpdated(), this
            }),
            (t.prototype.invertToRef = function(e) {
              if (!0 === this._isIdentity) return t.IdentityToRef(e), this
              var n = this._m,
                o = n[0],
                r = n[1],
                i = n[2],
                s = n[3],
                a = n[4],
                p = n[5],
                u = n[6],
                l = n[7],
                c = n[8],
                h = n[9],
                d = n[10],
                f = n[11],
                y = n[12],
                v = n[13],
                m = n[14],
                b = n[15],
                g = d * b - m * f,
                _ = h * b - v * f,
                C = h * m - v * d,
                O = c * b - y * f,
                x = c * m - d * y,
                w = c * v - y * h,
                T = +(p * g - u * _ + l * C),
                R = -(a * g - u * O + l * x),
                A = +(a * _ - p * O + l * w),
                E = -(a * C - p * x + u * w),
                S = o * T + r * R + i * A + s * E
              if (0 === S) return e.copyFrom(this), this
              var P = 1 / S,
                I = u * b - m * l,
                z = p * b - v * l,
                M = p * m - v * u,
                D = a * b - y * l,
                F = a * m - y * u,
                U = a * v - y * p,
                L = u * f - d * l,
                N = p * f - h * l,
                V = p * d - h * u,
                j = a * f - c * l,
                H = a * d - c * u,
                B = a * h - c * p,
                k = -(r * g - i * _ + s * C),
                G = +(o * g - i * O + s * x),
                W = -(o * _ - r * O + s * w),
                q = +(o * C - r * x + i * w),
                Y = +(r * I - i * z + s * M),
                X = -(o * I - i * D + s * F),
                Z = +(o * z - r * D + s * U),
                Q = -(o * M - r * F + i * U),
                J = -(r * L - i * N + s * V),
                K = +(o * L - i * j + s * H),
                $ = -(o * N - r * j + s * B),
                tt = +(o * V - r * H + i * B)
              return (
                t.FromValuesToRef(
                  T * P,
                  k * P,
                  Y * P,
                  J * P,
                  R * P,
                  G * P,
                  X * P,
                  K * P,
                  A * P,
                  W * P,
                  Z * P,
                  $ * P,
                  E * P,
                  q * P,
                  Q * P,
                  tt * P,
                  e
                ),
                this
              )
            }),
            (t.prototype.addAtIndex = function(t, e) {
              return (this._m[t] += e), this._markAsUpdated(), this
            }),
            (t.prototype.multiplyAtIndex = function(t, e) {
              return (this._m[t] *= e), this._markAsUpdated(), this
            }),
            (t.prototype.setTranslationFromFloats = function(t, e, n) {
              return (this._m[12] = t), (this._m[13] = e), (this._m[14] = n), this._markAsUpdated(), this
            }),
            (t.prototype.setTranslation = function(t) {
              return this.setTranslationFromFloats(t.x, t.y, t.z)
            }),
            (t.prototype.getTranslation = function() {
              return new o.Vector3(this._m[12], this._m[13], this._m[14])
            }),
            (t.prototype.getTranslationToRef = function(t) {
              return (t.x = this._m[12]), (t.y = this._m[13]), (t.z = this._m[14]), this
            }),
            (t.prototype.removeRotationAndScaling = function() {
              var e = this.m
              return (
                t.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e[12], e[13], e[14], e[15], this),
                this._updateIdentityStatus(0 === e[12] && 0 === e[13] && 0 === e[14] && 1 === e[15]),
                this
              )
            }),
            (t.prototype.multiply = function(e) {
              var n = new t()
              return this.multiplyToRef(e, n), n
            }),
            (t.prototype.copyFrom = function(t) {
              t.copyToArray(this._m)
              var e = t
              return this._updateIdentityStatus(e._isIdentity, e._isIdentityDirty, e._isIdentity3x2, e._isIdentity3x2Dirty), this
            }),
            (t.prototype.copyToArray = function(t, e) {
              void 0 === e && (e = 0)
              for (var n = 0; n < 16; n++) t[e + n] = this._m[n]
              return this
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return this._isIdentity
                ? (e.copyFrom(t), this)
                : t._isIdentity
                ? (e.copyFrom(this), this)
                : (this.multiplyToArray(t, e._m, 0), e._markAsUpdated(), this)
            }),
            (t.prototype.multiplyToArray = function(t, e, n) {
              var o = this._m,
                r = t.m,
                i = o[0],
                s = o[1],
                a = o[2],
                p = o[3],
                u = o[4],
                l = o[5],
                c = o[6],
                h = o[7],
                d = o[8],
                f = o[9],
                y = o[10],
                v = o[11],
                m = o[12],
                b = o[13],
                g = o[14],
                _ = o[15],
                C = r[0],
                O = r[1],
                x = r[2],
                w = r[3],
                T = r[4],
                R = r[5],
                A = r[6],
                E = r[7],
                S = r[8],
                P = r[9],
                I = r[10],
                z = r[11],
                M = r[12],
                D = r[13],
                F = r[14],
                U = r[15]
              return (
                (e[n] = i * C + s * T + a * S + p * M),
                (e[n + 1] = i * O + s * R + a * P + p * D),
                (e[n + 2] = i * x + s * A + a * I + p * F),
                (e[n + 3] = i * w + s * E + a * z + p * U),
                (e[n + 4] = u * C + l * T + c * S + h * M),
                (e[n + 5] = u * O + l * R + c * P + h * D),
                (e[n + 6] = u * x + l * A + c * I + h * F),
                (e[n + 7] = u * w + l * E + c * z + h * U),
                (e[n + 8] = d * C + f * T + y * S + v * M),
                (e[n + 9] = d * O + f * R + y * P + v * D),
                (e[n + 10] = d * x + f * A + y * I + v * F),
                (e[n + 11] = d * w + f * E + y * z + v * U),
                (e[n + 12] = m * C + b * T + g * S + _ * M),
                (e[n + 13] = m * O + b * R + g * P + _ * D),
                (e[n + 14] = m * x + b * A + g * I + _ * F),
                (e[n + 15] = m * w + b * E + g * z + _ * U),
                this
              )
            }),
            (t.prototype.equals = function(t) {
              var e = t
              if (!e) return !1
              if ((this._isIdentity || e._isIdentity) && !this._isIdentityDirty && !e._isIdentityDirty)
                return this._isIdentity && e._isIdentity
              var n = this.m,
                o = e.m
              return (
                n[0] === o[0] &&
                n[1] === o[1] &&
                n[2] === o[2] &&
                n[3] === o[3] &&
                n[4] === o[4] &&
                n[5] === o[5] &&
                n[6] === o[6] &&
                n[7] === o[7] &&
                n[8] === o[8] &&
                n[9] === o[9] &&
                n[10] === o[10] &&
                n[11] === o[11] &&
                n[12] === o[12] &&
                n[13] === o[13] &&
                n[14] === o[14] &&
                n[15] === o[15]
              )
            }),
            (t.prototype.clone = function() {
              var e = new t()
              return e.copyFrom(this), e
            }),
            (t.prototype.getClassName = function() {
              return 'Matrix'
            }),
            (t.prototype.getHashCode = function() {
              for (var t = this._m[0] || 0, e = 1; e < 16; e++) t = (397 * t) ^ (this._m[e] || 0)
              return t
            }),
            (t.prototype.decompose = function(e, n, o) {
              if (this._isIdentity) return o && o.setAll(0), e && e.setAll(1), n && n.copyFromFloats(0, 0, 0, 1), !0
              var s = this._m
              o && o.copyFromFloats(s[12], s[13], s[14])
              var a = e || i.MathTmp.Vector3[0]
              if (
                ((a.x = Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2])),
                (a.y = Math.sqrt(s[4] * s[4] + s[5] * s[5] + s[6] * s[6])),
                (a.z = Math.sqrt(s[8] * s[8] + s[9] * s[9] + s[10] * s[10])),
                this.determinant() <= 0 && (a.y *= -1),
                0 === a.x || 0 === a.y || 0 === a.z)
              )
                return n && n.copyFromFloats(0, 0, 0, 1), !1
              if (n) {
                var p = 1 / a.x,
                  u = 1 / a.y,
                  l = 1 / a.z
                t.FromValuesToRef(
                  s[0] * p,
                  s[1] * p,
                  s[2] * p,
                  0,
                  s[4] * u,
                  s[5] * u,
                  s[6] * u,
                  0,
                  s[8] * l,
                  s[9] * l,
                  s[10] * l,
                  0,
                  0,
                  0,
                  0,
                  1,
                  i.MathTmp.Matrix[0]
                ),
                  r.Quaternion.FromRotationMatrixToRef(i.MathTmp.Matrix[0], n)
              }
              return !0
            }),
            (t.prototype.getRow = function(t) {
              if (t < 0 || t > 3) return null
              var e = 4 * t
              return new s.Vector4(this._m[e + 0], this._m[e + 1], this._m[e + 2], this._m[e + 3])
            }),
            (t.prototype.setRow = function(t, e) {
              return this.setRowFromFloats(t, e.x, e.y, e.z, e.w)
            }),
            (t.prototype.transpose = function() {
              return t.Transpose(this)
            }),
            (t.prototype.transposeToRef = function(e) {
              return t.TransposeToRef(this, e), this
            }),
            (t.prototype.setRowFromFloats = function(t, e, n, o, r) {
              if (t < 0 || t > 3) return this
              var i = 4 * t
              return (this._m[i + 0] = e), (this._m[i + 1] = n), (this._m[i + 2] = o), (this._m[i + 3] = r), this._markAsUpdated(), this
            }),
            (t.prototype.scale = function(e) {
              var n = new t()
              return this.scaleToRef(e, n), n
            }),
            (t.prototype.scaleToRef = function(t, e) {
              for (var n = 0; n < 16; n++) e._m[n] = this._m[n] * t
              return e._markAsUpdated(), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              for (var n = 0; n < 16; n++) e._m[n] += this._m[n] * t
              return e._markAsUpdated(), this
            }),
            (t.prototype.toNormalMatrix = function(e) {
              var n = i.MathTmp.Matrix[0]
              this.invertToRef(n), n.transposeToRef(e)
              var o = e._m
              t.FromValuesToRef(o[0], o[1], o[2], 0, o[4], o[5], o[6], 0, o[8], o[9], o[10], 0, 0, 0, 0, 1, e)
            }),
            (t.prototype.getRotationMatrix = function() {
              var e = new t()
              return this.getRotationMatrixToRef(e), e
            }),
            (t.prototype.getRotationMatrixToRef = function(e) {
              var n = i.MathTmp.Vector3[0]
              if (!this.decompose(n)) return t.IdentityToRef(e), this
              var o = this._m,
                r = 1 / n.x,
                s = 1 / n.y,
                a = 1 / n.z
              return (
                t.FromValuesToRef(
                  o[0] * r,
                  o[1] * r,
                  o[2] * r,
                  0,
                  o[4] * s,
                  o[5] * s,
                  o[6] * s,
                  0,
                  o[8] * a,
                  o[9] * a,
                  o[10] * a,
                  0,
                  0,
                  0,
                  0,
                  1,
                  e
                ),
                this
              )
            }),
            (t.prototype.toggleModelMatrixHandInPlace = function() {
              var t = this._m
              ;(t[2] *= -1), (t[6] *= -1), (t[8] *= -1), (t[9] *= -1), (t[14] *= -1), this._markAsUpdated()
            }),
            (t.prototype.toggleProjectionMatrixHandInPlace = function() {
              var t = this._m
              ;(t[8] *= -1), (t[9] *= -1), (t[10] *= -1), (t[11] *= -1), this._markAsUpdated()
            }),
            (t.prototype._updateIdentityStatus = function(e, n, o, r) {
              void 0 === n && (n = !1),
                void 0 === o && (o = !1),
                void 0 === r && (r = !0),
                (this.updateFlag = t._updateFlagSeed++),
                (this._isIdentity = e),
                (this._isIdentity3x2 = e || o),
                (this._isIdentityDirty = !this._isIdentity && n),
                (this._isIdentity3x2Dirty = !this._isIdentity3x2 && r)
            }),
            (t._updateFlagSeed = 0),
            (t._identityReadOnly = t.Identity()),
            t
          )
        })()
      e.Matrix = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Entity = void 0)
      var o = n(0),
        r = n(7),
        i = n(1),
        s = (function() {
          function t(t) {
            ;(this.name = t),
              (this.children = {}),
              (this.eventManager = null),
              (this.alive = !1),
              (this.uuid = i.newId('E')),
              (this.components = {}),
              (this.engine = null),
              (this._parent = null)
          }
          return (
            (t.prototype.addComponentOrReplace = function(t) {
              if ('function' == typeof t)
                throw new Error('You passed a function or class as a component, an instance of component is expected')
              if ('object' != typeof t) throw new Error('You passed a ' + typeof t + ', an instance of component is expected')
              var e = o.getComponentName(t)
              if (this.components[e]) {
                if (this.components[e] === t) return t
                this.removeComponent(this.components[e], !1)
              }
              return this.addComponent(t)
            }),
            (t.prototype.hasComponent = function(t) {
              var e = typeof t
              if ('string' !== e && 'object' !== e && 'function' !== e)
                throw new Error('Entity#has(component): component is not a class, name or instance')
              if (null == t) return !1
              var n = 'string' === e ? t : o.getComponentName(t),
                r = this.components[n]
              return !!r && ('object' === e ? r === t : 'function' !== e || r instanceof t)
            }),
            (t.prototype.getComponent = function(t) {
              var e = typeof t
              if ('string' !== e && 'function' !== e) throw new Error('Entity#get(component): component is not a class or name')
              var n = 'string' === e ? t : o.getComponentName(t),
                r = this.components[n]
              if (!r) throw new Error('Can not get component "' + n + '" from entity "' + this.identifier + '"')
              if ('function' === e) {
                if (r instanceof t) return r
                throw new Error('Can not get component "' + n + '" from entity "' + this.identifier + '" (by instance)')
              }
              return r
            }),
            (t.prototype.getComponentOrNull = function(t) {
              var e = typeof t
              if ('string' !== e && 'function' !== e) throw new Error('Entity#getOrNull(component): component is not a class or name')
              var n = 'string' === e ? t : o.getComponentName(t),
                r = this.components[n]
              return r ? ('function' === e ? (r instanceof t ? r : null) : r) : null
            }),
            (t.prototype.getComponentOrCreate = function(t) {
              if ('function' != typeof t) throw new Error('Entity#getOrCreate(component): component is not a class')
              var e = this.getComponentOrNull(t)
              return e || ((e = new t()), o.getComponentName(e), this.addComponentOrReplace(e)), e
            }),
            (t.prototype.addComponent = function(t) {
              if ('object' != typeof t)
                throw new Error(
                  'Entity#add(component): You passed a function or class as a component, an instance of component is expected'
                )
              var e = o.getComponentName(t),
                n = o.getComponentClassId(t)
              if (this.components[e])
                throw new Error('A component of type "' + e + '" is already present in entity "' + this.identifier + '"')
              ;(this.components[e] = t), this.eventManager && this.eventManager.fireEvent(new r.ComponentAdded(this, e, n))
              var i = t
              return 'function' == typeof i.addedToEntity && i.addedToEntity(this), t
            }),
            (t.prototype.removeComponent = function(t, e) {
              void 0 === e && (e = !0)
              var n = typeof t
              if ('string' !== n && 'function' !== n && 'object' !== n)
                throw new Error('Entity#remove(component): component is not a class, class or name')
              var s = 'string' === n ? t : o.getComponentName(t),
                a = this.components[s]
              if (a) {
                if ('function' === n)
                  return a instanceof t
                    ? (delete this.components[s],
                      void (
                        a &&
                        (e && this.eventManager && this.eventManager.fireEvent(new r.ComponentRemoved(this, s, a)),
                        'function' == typeof a.removedFromEntity && a.removedFromEntity(this))
                      ))
                    : void i.log(
                        'Entity Warning: Trying to remove wrong (by constructor) component "' +
                          s +
                          '" from entity "' +
                          this.identifier +
                          '"'
                      )
                delete this.components[s],
                  a &&
                    (e && this.eventManager && this.eventManager.fireEvent(new r.ComponentRemoved(this, s, a)),
                    'function' == typeof a.removedFromEntity && a.removedFromEntity(this))
              } else i.log('Entity Warning: Trying to remove inexisting component "' + s + '" from entity "' + this.identifier + '"')
            }),
            (t.prototype.isAddedToEngine = function() {
              return !(!this.engine || (!(this.uuid in this.engine.entities) && this.engine.rootEntity !== this))
            }),
            (t.prototype.setParent = function(t) {
              var e
              if (t && 'getEntityRepresentation' in t) {
                if (!this.engine)
                  throw new Error('In order to set an attachable as parent, you first need to add the entity to the engine.')
                e = t.getEntityRepresentation(this.engine)
              } else e = !t && this.engine ? this.engine.rootEntity : t
              var n = this.getParent()
              if (e === this)
                throw new Error(
                  'Failed to set parent for entity "' + this.identifier + '": An entity can\'t set itself as a its own parent'
                )
              if (e === n) return this
              var o = this.getCircularAncestor(e)
              if (o)
                throw new Error(
                  'Failed to set parent for entity "' +
                    this.identifier +
                    '": Circular parent references are not allowed (See entity "' +
                    o +
                    '")'
                )
              return (
                n && delete n.children[this.uuid],
                null !== e &&
                  '0' !== e.uuid &&
                  (!e.isAddedToEngine() && this.isAddedToEngine() && this.engine.removeEntity(this),
                  e.isAddedToEngine() && !this.isAddedToEngine() && e.engine.addEntity(this)),
                (this._parent = e || null),
                this.registerAsChild(),
                this.eventManager && this.engine && this.eventManager.fireEvent(new r.ParentChanged(this, e)),
                this
              )
            }),
            (t.prototype.getParent = function() {
              return this._parent
            }),
            Object.defineProperty(t.prototype, 'identifier', {
              get: function() {
                return this.name || this.uuid
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.getCircularAncestor = function(t) {
              for (var e = this.engine ? this.engine.rootEntity : null, n = t; n && n !== e; ) {
                var o = n.getParent()
                if (o === this) return n.uuid
                n = o
              }
              return null
            }),
            (t.prototype.registerAsChild = function() {
              var t = this.getParent()
              this.uuid && t && (t.children[this.uuid] = this)
            }),
            t
          )
        })()
      e.Entity = s
    },
    function(t, e, n) {
      'use strict'
      var o =
        (this && this.__decorate) ||
        function(t, e, n, o) {
          var r,
            i = arguments.length,
            s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
          else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
          return i > 3 && s && Object.defineProperty(e, n, s), s
        }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.PointerEvent = e.RaycastResponse = e.UUIDEvent = void 0)
      var r = n(8),
        i = (function() {
          function t(t, e) {
            ;(this.uuid = t), (this.payload = e)
          }
          return (t = o([r.EventConstructor()], t))
        })()
      e.UUIDEvent = i
      var s = (function() {
        function t(t) {
          this.payload = t
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.RaycastResponse = s
      var a = (function() {
        function t(t) {
          this.payload = t
        }
        return (t = o([r.EventConstructor()], t))
      })()
      e.PointerEvent = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.uuidEventSystem = e.UUIDEventSystem = e.pointerEventSystem = e.PointerEventSystem = e.raycastEventSystem = e.RaycastEventSystem = void 0)
      var o = n(13),
        r = n(4),
        i = n(7),
        s = n(16),
        a = n(28),
        p = (function() {
          function t() {}
          return (
            (t.prototype.activate = function(t) {
              t.eventManager.addListener(o.RaycastResponse, this, function(t) {
                'HitFirst' === t.payload.queryType
                  ? a.PhysicsCast.instance.handleRaycastHitFirstResponse(t)
                  : 'HitAll' === t.payload.queryType && a.PhysicsCast.instance.handleRaycastHitAllResponse(t)
              }),
                'undefined' != typeof dcl && dcl.subscribe('raycastResponse')
            }),
            (t.prototype.deactivate = function() {
              'undefined' != typeof dcl && dcl.unsubscribe('raycastResponse')
            }),
            t
          )
        })()
      ;(e.RaycastEventSystem = p), (e.raycastEventSystem = new p())
      var u = (function() {
        function t() {}
        return (
          (t.prototype.activate = function(t) {
            t.eventManager.addListener(o.PointerEvent, this, function(t) {
              s.Input.instance.handlePointerEvent(t.payload)
            }),
              'undefined' != typeof dcl && (dcl.subscribe('pointerUp'), dcl.subscribe('pointerDown'), dcl.subscribe('pointerEvent'))
          }),
          (t.prototype.deactivate = function() {
            'undefined' != typeof dcl && (dcl.unsubscribe('pointerUp'), dcl.unsubscribe('pointerDown'), dcl.unsubscribe('pointerEvent'))
          }),
          t
        )
      })()
      ;(e.PointerEventSystem = u), (e.pointerEventSystem = new u())
      var l = (function() {
        function t() {
          this.handlerMap = {}
        }
        return (
          (t.prototype.activate = function(t) {
            t.eventManager.addListener(o.UUIDEvent, this, this.handleEvent),
              t.eventManager.addListener(i.ComponentAdded, this, this.componentAdded),
              t.eventManager.addListener(i.ComponentRemoved, this, this.componentRemoved),
              'undefined' != typeof dcl && dcl.subscribe('uuidEvent')
          }),
          (t.prototype.deactivate = function() {
            'undefined' != typeof dcl && dcl.unsubscribe('uuidEvent')
          }),
          (t.prototype.onAddEntity = function(t) {
            for (var e in t.components) {
              var n = t.components[e]
              n instanceof r.OnUUIDEvent && (this.handlerMap[n.uuid] = n)
            }
          }),
          (t.prototype.onRemoveEntity = function(t) {
            for (var e in t.components) {
              var n = t.components[e]
              n instanceof r.OnUUIDEvent && delete this.handlerMap[n.uuid]
            }
          }),
          (t.prototype.componentAdded = function(t) {
            if (t.entity.isAddedToEngine()) {
              var e = t.entity.components[t.componentName]
              e instanceof r.OnUUIDEvent && (this.handlerMap[e.uuid] = e)
            }
          }),
          (t.prototype.componentRemoved = function(t) {
            t.entity.isAddedToEngine() && t.component instanceof r.OnUUIDEvent && delete this.handlerMap[t.component.uuid]
          }),
          (t.prototype.handleEvent = function(t) {
            if (t.uuid in this.handlerMap) {
              var e = this.handlerMap[t.uuid]
              e && e.callback && 'call' in e.callback && e.callback(t.payload)
            }
          }),
          t
        )
      })()
      ;(e.UUIDEventSystem = l), (e.uuidEventSystem = new l())
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Vector2 = void 0)
      var o = n(2),
        r = n(6),
        i = (function() {
          function t(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), (this.x = t), (this.y = e)
          }
          return (
            (t.Zero = function() {
              return new t(0, 0)
            }),
            (t.One = function() {
              return new t(1, 1)
            }),
            (t.Add = function(e, n) {
              return new t(e.x, e.y).addInPlace(n)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1])
            }),
            (t.FromArrayToRef = function(t, e, n) {
              ;(n.x = t[e]), (n.y = t[e + 1])
            }),
            (t.CatmullRom = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s
              return new t(
                0.5 * (2 * n.x + (-e.x + o.x) * i + (2 * e.x - 5 * n.x + 4 * o.x - r.x) * s + (-e.x + 3 * n.x - 3 * o.x + r.x) * a),
                0.5 * (2 * n.y + (-e.y + o.y) * i + (2 * e.y - 5 * n.y + 4 * o.y - r.y) * s + (-e.y + 3 * n.y - 3 * o.y + r.y) * a)
              )
            }),
            (t.Clamp = function(e, n, o) {
              var r = e.x
              r = (r = r > o.x ? o.x : r) < n.x ? n.x : r
              var i = e.y
              return new t(r, (i = (i = i > o.y ? o.y : i) < n.y ? n.y : i))
            }),
            (t.Hermite = function(e, n, o, r, i) {
              var s = i * i,
                a = i * s,
                p = 2 * a - 3 * s + 1,
                u = -2 * a + 3 * s,
                l = a - 2 * s + i,
                c = a - s
              return new t(e.x * p + o.x * u + n.x * l + r.x * c, e.y * p + o.y * u + n.y * l + r.y * c)
            }),
            (t.Lerp = function(e, n, o) {
              return new t(e.x + (n.x - e.x) * o, e.y + (n.y - e.y) * o)
            }),
            (t.Dot = function(t, e) {
              return t.x * e.x + t.y * e.y
            }),
            (t.Normalize = function(e) {
              var n = new t(e.x, e.y)
              return n.normalize(), n
            }),
            (t.Minimize = function(e, n) {
              return new t(e.x < n.x ? e.x : n.x, e.y < n.y ? e.y : n.y)
            }),
            (t.Maximize = function(e, n) {
              return new t(e.x > n.x ? e.x : n.x, e.y > n.y ? e.y : n.y)
            }),
            (t.Transform = function(e, n) {
              var o = t.Zero()
              return t.TransformToRef(e, n, o), o
            }),
            (t.TransformToRef = function(t, e, n) {
              var o = e.m,
                r = t.x * o[0] + t.y * o[4] + o[12],
                i = t.x * o[1] + t.y * o[5] + o[13]
              ;(n.x = r), (n.y = i)
            }),
            (t.PointInTriangle = function(t, e, n, o) {
              var r = 0.5 * (-n.y * o.x + e.y * (-n.x + o.x) + e.x * (n.y - o.y) + n.x * o.y),
                i = r < 0 ? -1 : 1,
                s = (e.y * o.x - e.x * o.y + (o.y - e.y) * t.x + (e.x - o.x) * t.y) * i,
                a = (e.x * n.y - e.y * n.x + (e.y - n.y) * t.x + (n.x - e.x) * t.y) * i
              return s > 0 && a > 0 && s + a < 2 * r * i
            }),
            (t.Distance = function(e, n) {
              return Math.sqrt(t.DistanceSquared(e, n))
            }),
            (t.DistanceSquared = function(t, e) {
              var n = t.x - e.x,
                o = t.y - e.y
              return n * n + o * o
            }),
            (t.Center = function(e, n) {
              var o = t.Add(e, n)
              return o.scaleInPlace(0.5), o
            }),
            (t.DistanceOfPointFromSegment = function(e, n, o) {
              var r = t.DistanceSquared(n, o)
              if (0 === r) return t.Distance(e, n)
              var i = o.subtract(n),
                s = Math.max(0, Math.min(1, t.Dot(e.subtract(n), i) / r)),
                a = n.add(i.multiplyByFloats(s, s))
              return t.Distance(e, a)
            }),
            (t.prototype.toString = function() {
              return '{X: ' + this.x + ' Y:' + this.y + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Vector2'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * t) ^ (this.y || 0))
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.x), (t[e + 1] = this.y), this
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.x = t.x), (this.y = t.y), this
            }),
            (t.prototype.copyFromFloats = function(t, e) {
              return (this.x = t), (this.y = e), this
            }),
            (t.prototype.set = function(t, e) {
              return this.copyFromFloats(t, e)
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y)
            }),
            (t.prototype.addToRef = function(t, e) {
              return (e.x = this.x + t.x), (e.y = this.y + t.y), this
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.x += t.x), (this.y += t.y), this
            }),
            (t.prototype.addVector3 = function(e) {
              return new t(this.x + e.x, this.y + e.y)
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.x = this.x - t.x), (e.y = this.y - t.y), this
            }),
            (t.prototype.subtractInPlace = function(t) {
              return (this.x -= t.x), (this.y -= t.y), this
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return (this.x *= t.x), (this.y *= t.y), this
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.x * e.x, this.y * e.y)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.x = this.x * t.x), (e.y = this.y * t.y), this
            }),
            (t.prototype.multiplyByFloats = function(e, n) {
              return new t(this.x * e, this.y * n)
            }),
            (t.prototype.divide = function(e) {
              return new t(this.x / e.x, this.y / e.y)
            }),
            (t.prototype.divideToRef = function(t, e) {
              return (e.x = this.x / t.x), (e.y = this.y / t.y), this
            }),
            (t.prototype.divideInPlace = function(t) {
              return this.divideToRef(t, this)
            }),
            (t.prototype.negate = function() {
              return new t(-this.x, -this.y)
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), this
            }),
            (t.prototype.scale = function(e) {
              var n = new t(0, 0)
              return this.scaleToRef(e, n), n
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.x = this.x * t), (e.y = this.y * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.x += this.x * t), (e.y += this.y * t), this
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y
            }),
            (t.prototype.equalsWithEpsilon = function(t, e) {
              return void 0 === e && (e = o.Epsilon), t && r.Scalar.WithinEpsilon(this.x, t.x, e) && r.Scalar.WithinEpsilon(this.y, t.y, e)
            }),
            (t.prototype.floor = function() {
              return new t(Math.floor(this.x), Math.floor(this.y))
            }),
            (t.prototype.fract = function() {
              return new t(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
            }),
            (t.prototype.length = function() {
              return Math.sqrt(this.x * this.x + this.y * this.y)
            }),
            (t.prototype.lengthSquared = function() {
              return this.x * this.x + this.y * this.y
            }),
            (t.prototype.normalize = function() {
              var t = this.length()
              if (0 === t) return this
              var e = 1 / t
              return (this.x *= e), (this.y *= e), this
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y)
            }),
            t
          )
        })()
      e.Vector2 = i
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        s =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.Input = e.GlobalPointerUp = e.GlobalPointerDown = e.PointerEventComponent = e.ActionButton = void 0)
      var a,
        p = n(27),
        u = n(5),
        l = n(0)
      !(function(t) {
        ;(t.POINTER = 'POINTER'), (t.PRIMARY = 'PRIMARY'), (t.SECONDARY = 'SECONDARY'), (t.ANY = 'ANY')
      })((a = e.ActionButton || (e.ActionButton = {})))
      var c = function(t) {
        if (((this.callback = t), !t || !('apply' in t) || !('call' in t))) throw new Error('Callback is not a function')
        y.ensureInstance()
      }
      e.PointerEventComponent = c
      var h = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([l.Component('pointerDown')], e))
      })(c)
      e.GlobalPointerDown = h
      var d = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this
        }
        return r(e, t), (e = s([l.Component('pointerUp')], e))
      })(c)
      e.GlobalPointerUp = d
      var f = function(t, e) {
          ;(this.fn = t), (this.useRaycast = e)
        },
        y = (function() {
          function t() {
            var t, e
            ;(this.subscriptions =
              (((t = {})[a.POINTER] = { BUTTON_DOWN: [], BUTTON_UP: [] }),
              (t[a.PRIMARY] = { BUTTON_DOWN: [], BUTTON_UP: [] }),
              (t[a.SECONDARY] = { BUTTON_DOWN: [], BUTTON_UP: [] }),
              (t[a.ANY] = { BUTTON_DOWN: [], BUTTON_UP: [] }),
              t)),
              (this.internalState =
                (((e = {})[a.POINTER] = { BUTTON_DOWN: !1 }),
                (e[a.PRIMARY] = { BUTTON_DOWN: !1 }),
                (e[a.SECONDARY] = { BUTTON_DOWN: !1 }),
                (e[a.ANY] = { BUTTON_DOWN: !1 }),
                e))
          }
          return (
            Object.defineProperty(t, 'instance', {
              get: function() {
                return t.ensureInstance(), t._instance
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.ensureInstance = function() {
              t._instance || (t._instance = new t())
            }),
            (t.prototype.isButtonPressed = function(t) {
              return this.internalState[t]
            }),
            (t.prototype.subscribe = function(t, e, n, o) {
              var r = this
              return (
                this.subscriptions[e][t].push(new f(o, n)),
                function() {
                  return r.unsubscribe(t, e, o)
                }
              )
            }),
            (t.prototype.unsubscribe = function(t, e, n) {
              var o = this.getSubscriptionId(t, e, n)
              return o > -1 && this.subscriptions[e][t].splice(o, 1)
            }),
            (t.prototype.handlePointerEvent = function(t) {
              var e = this.getPointerById(t.buttonId),
                n = i(i({}, t), {
                  button: e,
                  direction: new u.Vector3().copyFrom(t.direction),
                  origin: new u.Vector3().copyFrom(t.origin),
                  hit: void 0
                }),
                o = t.hit
                  ? i(i({}, t.hit), {
                      hitPoint: new u.Vector3().copyFrom(t.hit.hitPoint),
                      normal: new u.Vector3().copyFrom(t.hit.normal),
                      worldNormal: new u.Vector3().copyFrom(t.hit.worldNormal)
                    })
                  : void 0
              if (t.type === p.InputEventType.DOWN) {
                this.internalState[e].BUTTON_DOWN = !0
                for (var r = 0; r < this.subscriptions[e].BUTTON_DOWN.length; r++) {
                  ;(s = this.subscriptions[e].BUTTON_DOWN[r]).useRaycast ? (n.hit = o) : (n.hit = void 0), s.fn(n)
                }
                if (o && o.entityId && l.DisposableComponent.engine)
                  (c = (a = l.DisposableComponent.engine.entities[o.entityId]) && a.getComponentOrNull(h)) && ((n.hit = o), c.callback(n))
              } else {
                this.internalState[e].BUTTON_DOWN = !1
                for (r = 0; r < this.subscriptions[e].BUTTON_UP.length; r++) {
                  var s
                  ;(s = this.subscriptions[e].BUTTON_UP[r]).useRaycast ? (n.hit = o) : (n.hit = void 0), s.fn(n)
                }
                var a, c
                if (o && o.entityId && l.DisposableComponent.engine)
                  (c = (a = l.DisposableComponent.engine.entities[o.entityId]) && a.getComponentOrNull(d)) && ((n.hit = o), c.callback(n))
              }
            }),
            (t.prototype.getSubscriptionId = function(t, e, n) {
              for (var o = 0; o < this.subscriptions[e][t].length; o++) if (this.subscriptions[e][t][o].fn === n) return o
              return -1
            }),
            (t.prototype.getPointerById = function(t) {
              return 0 === t ? a.POINTER : 1 === t ? a.PRIMARY : a.SECONDARY
            }),
            t
          )
        })()
      e.Input = y
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__read) ||
          function(t, e) {
            var n = 'function' == typeof Symbol && t[Symbol.iterator]
            if (!n) return t
            var o,
              r,
              i = n.call(t),
              s = []
            try {
              for (; (void 0 === e || e-- > 0) && !(o = i.next()).done; ) s.push(o.value)
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i)
              } finally {
                if (r) throw r.error
              }
            }
            return s
          },
        r =
          (this && this.__spread) ||
          function() {
            for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e]))
            return t
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Engine = void 0)
      var i = n(7),
        s = n(0),
        a = n(8),
        p = n(32),
        u = n(1),
        l = n(12),
        c = (function() {
          function t(t) {
            ;(this.eventManager = new a.EventManager()),
              (this.systems = []),
              (this.entityLists = {}),
              (this.addedSystems = []),
              (this._entities = {}),
              (this._disposableComponents = {}),
              (this._componentGroups = {}),
              (this.simpleSystems = []),
              this.eventManager.addListener(i.ComponentAdded, this, this.componentAddedHandler),
              this.eventManager.addListener(i.ComponentRemoved, this, this.componentRemovedHandler),
              (this.rootEntity = t),
              (this.firstPersonCameraEntity = new l.Entity()),
              (this.firstPersonCameraEntity.uuid = 'FirstPersonCameraEntityReference'),
              this.addEntity(this.firstPersonCameraEntity),
              (this.avatarEntity = new l.Entity()),
              (this.avatarEntity.uuid = 'AvatarEntityReference'),
              this.addEntity(this.avatarEntity)
          }
          return (
            Object.defineProperty(t.prototype, 'entities', {
              get: function() {
                return this._entities
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'disposableComponents', {
              get: function() {
                return this._disposableComponents
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.addEntity = function(t) {
              var e = t.getParent()
              if (t.isAddedToEngine()) return t
              for (var n in ((t.eventManager = this.eventManager),
              (t.engine = this),
              (this._entities[t.uuid] = t),
              this.checkRequirementsAndAdd(t),
              e
                ? e.isAddedToEngine() ||
                  e === this.rootEntity ||
                  u.log('Engine: warning, added an entity with a parent not present in the engine. Parent id: ' + e.uuid)
                : t.setParent(this.rootEntity),
              (t.alive = !0),
              t.children)) {
                var o = t.children[n]
                o && (o.isAddedToEngine() || this.addEntity(o))
              }
              return t
            }),
            (t.prototype.removeEntity = function(t) {
              var e = t.uuid
              if (t.isAddedToEngine()) {
                for (var n in t.components) {
                  var o = this._componentGroups[n]
                  if (o) for (var r in o) o[r].removeEntity(t)
                  delete this.entityLists[n][e]
                }
                for (var i = 0; i < this.simpleSystems.length; i++) {
                  var s = this.simpleSystems[i]
                  s.onRemoveEntity && s.onRemoveEntity(t)
                }
                for (var i in t.children) {
                  var a = t.children[i]
                  a && this.removeEntity(a)
                }
                return (t.alive = !1), (t.eventManager = null), delete this._entities[e], !0
              }
              for (var n in (u.log('Engine: Trying to remove non existent entity from engine.'),
              t.isAddedToEngine()
                ? u.log('Engine: Entity id: ' + e)
                : u.log('Engine: Entity "' + t.uuid + '" has not been added to any engine yet.'),
              u.log("Engine: Entity's components:"),
              t.components))
                u.log(n)
              return !1
            }),
            (t.prototype.addSystem = function(t, e) {
              if ((void 0 === e && (e = 0), -1 !== this.addedSystems.indexOf(t)))
                return u.log('Engine: Trying to add a system that is already added. Aborting'), t
              if (this.systems.length > 0)
                for (var n = 0; n < this.systems.length; n++) {
                  var o = this.systems[n],
                    r = n === this.systems.length - 1
                  if (o.priority > e) {
                    this.addedSystems.push(t), this.systems.splice(n, 0, { system: t, priority: e })
                    break
                  }
                  if (r) {
                    this.addedSystems.push(t), this.systems.splice(n + 1, 0, { system: t, priority: e })
                    break
                  }
                }
              else this.addedSystems.push(t), this.systems.splice(1, 0, { system: t, priority: e })
              return this.registerSystem(t), t
            }),
            (t.prototype.removeSystem = function(t) {
              var e = this.addedSystems.indexOf(t)
              if (-1 !== e) {
                ;(t.active = !1), t.deactivate && t.deactivate(), this.addedSystems.splice(e, 1)
                for (var n = 0; n < this.systems.length; n++) {
                  this.systems[n].system === t && this.systems.splice(n, 1)
                }
                return !0
              }
              return !1
            }),
            (t.prototype.update = function(t) {
              for (var e in this.systems) {
                var n = this.systems[e].system
                if (n.active && n.update)
                  try {
                    n.update(t)
                  } catch (t) {
                    u.error(t)
                  }
              }
              return this
            }),
            (t.prototype.getEntitiesWithComponent = function(t) {
              var e = 'string' == typeof t ? t : s.getComponentName(t)
              return e in this.entityLists ? this.entityLists[e] : (this.entityLists[e] = {})
            }),
            (t.prototype.registerComponent = function(t) {
              var e = s.getComponentId(t),
                n = s.getComponentName(t),
                o = s.getComponentClassId(t)
              ;(this._disposableComponents[e] = t),
                null !== o &&
                  (this.eventManager.fireEvent(new s.DisposableComponentCreated(e, n, o)),
                  this.eventManager.fireEvent(new s.DisposableComponentUpdated(e, t)))
            }),
            (t.prototype.disposeComponent = function(t) {
              var e = s.getComponentId(t)
              return (
                delete this._disposableComponents[e] &&
                (this.eventManager.fireEvent(new s.DisposableComponentRemoved(e)), t.onDispose && t.onDispose(), !0)
              )
            }),
            (t.prototype.updateComponent = function(t) {
              this.eventManager.fireEvent(new s.DisposableComponentUpdated(s.getComponentId(t), t))
            }),
            (t.prototype.getComponentGroup = function() {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
              var n = new (p.ComponentGroup.bind.apply(p.ComponentGroup, r([void 0], t)))()
              n.active = !0
              for (var o = n.requiresNames, i = 0; i < o.length; i++) {
                var s = o[i],
                  a = this._componentGroups[s]
                a || (this._componentGroups[s] = a = []), -1 === a.indexOf(n) && a.push(n)
              }
              for (var u in this._entities) this.checkRequirements(this._entities[u], n)
              return n
            }),
            (t.prototype.removeComponentGroup = function(t) {
              if (t.active) {
                t.active = !1
                for (var e = t.requiresNames, n = 0; n < e.length; n++) {
                  var o = e[n],
                    r = this._componentGroups[o]
                  if (r) {
                    var i = r.indexOf(t)
                    ;-1 !== i && r.splice(i, 1)
                  }
                }
                return !0
              }
              return !1
            }),
            (t.prototype.registerSystem = function(t) {
              ;(t.active = !0), t.activate && t.activate(this), this.simpleSystems.push(t)
            }),
            (t.prototype.checkRequirementsAndAdd = function(t) {
              if (t.isAddedToEngine()) {
                for (var e in t.components) {
                  e in this.entityLists || (this.entityLists[e] = {}), (this.entityLists[e][t.uuid] = t)
                  var n = this._componentGroups[e]
                  if (n) for (var o in n) this.checkRequirements(t, n[o])
                }
                for (var r = 0; r < this.simpleSystems.length; r++) {
                  var i = this.simpleSystems[r]
                  i.onAddEntity && i.onAddEntity(t)
                }
              }
            }),
            (t.prototype.checkRequirements = function(t, e) {
              e.meetsRequirements(t) ? e.hasEntity(t) || e.addEntity(t) : e.hasEntity(t) && e.removeEntity(t)
            }),
            (t.prototype.componentAddedHandler = function(t) {
              var e,
                n = t.entity,
                o = t.componentName
              if (n.isAddedToEngine()) {
                this.entityLists[o] ? (this.entityLists[o][n.uuid] = n) : (this.entityLists[o] = (((e = {})[n.uuid] = n), e))
                var r = this._componentGroups[o]
                if (r) for (var i in r) this.checkRequirements(n, r[i])
              }
            }),
            (t.prototype.componentRemovedHandler = function(t) {
              var e = t.entity,
                n = t.componentName
              if (e.isAddedToEngine()) {
                delete this.entityLists[n][e.uuid]
                var o = this._componentGroups[n]
                if (o) for (var r in o) this.checkRequirements(e, o[r])
              }
            }),
            t
          )
        })()
      e.Engine = c
    },
    function(t, e, n) {
      'use strict'
      var o
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.UIValue = e.UIValueType = void 0),
        (function(t) {
          ;(t[(t.PERCENT = 0)] = 'PERCENT'), (t[(t.PIXELS = 1)] = 'PIXELS')
        })((o = e.UIValueType || (e.UIValueType = {})))
      var r = (function() {
        function t(t) {
          if (((this.type = o.PIXELS), 'string' == typeof t)) {
            var e = t
            e.indexOf('px') > -1 ? (this.type = o.PIXELS) : e.indexOf('%') > -1 && (this.type = o.PERCENT), (this.value = parseFloat(e))
          } else this.value = t
        }
        return (
          (t.prototype.toString = function() {
            var t = this.value.toString()
            return this.type === o.PERCENT ? (t += '%') : (t += 'px'), t
          }),
          t
        )
      })()
      e.UIValue = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.executeTask = void 0)
      var o = n(1),
        r = Promise.resolve().then.bind(Promise.resolve())
      e.executeTask = function(t) {
        var e = r(t)
        return (
          (e.isComplete = !1),
          e
            .then(function(t) {
              ;(e.isComplete = !0), (e.result = t), (e.didFail = !1)
            })
            .catch(function(t) {
              ;(e.isComplete = !0), (e.error = t), (e.didFail = !0), o.error('executeTask: FAILED ' + t.toString(), t)
            }),
          e
        )
      }
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__awaiter) ||
          function(t, e, n, o) {
            return new (n || (n = Promise))(function(r, i) {
              function s(t) {
                try {
                  p(o.next(t))
                } catch (t) {
                  i(t)
                }
              }
              function a(t) {
                try {
                  p(o.throw(t))
                } catch (t) {
                  i(t)
                }
              }
              function p(t) {
                var e
                t.done
                  ? r(t.value)
                  : ((e = t.value),
                    e instanceof n
                      ? e
                      : new n(function(t) {
                          t(e)
                        })).then(s, a)
              }
              p((o = o.apply(t, e || [])).next())
            })
          },
        r =
          (this && this.__generator) ||
          function(t, e) {
            var n,
              o,
              r,
              i,
              s = {
                label: 0,
                sent: function() {
                  if (1 & r[0]) throw r[1]
                  return r[1]
                },
                trys: [],
                ops: []
              }
            return (
              (i = { next: a(0), throw: a(1), return: a(2) }),
              'function' == typeof Symbol &&
                (i[Symbol.iterator] = function() {
                  return this
                }),
              i
            )
            function a(i) {
              return function(a) {
                return (function(i) {
                  if (n) throw new TypeError('Generator is already executing.')
                  for (; s; )
                    try {
                      if (
                        ((n = 1),
                        o &&
                          (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) &&
                          !(r = r.call(o, i[1])).done)
                      )
                        return r
                      switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                        case 0:
                        case 1:
                          r = i
                          break
                        case 4:
                          return s.label++, { value: i[1], done: !1 }
                        case 5:
                          s.label++, (o = i[1]), (i = [0])
                          continue
                        case 7:
                          ;(i = s.ops.pop()), s.trys.pop()
                          continue
                        default:
                          if (!((r = s.trys), (r = r.length > 0 && r[r.length - 1]) || (6 !== i[0] && 2 !== i[0]))) {
                            s = 0
                            continue
                          }
                          if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                            s.label = i[1]
                            break
                          }
                          if (6 === i[0] && s.label < r[1]) {
                            ;(s.label = r[1]), (r = i)
                            break
                          }
                          if (r && s.label < r[2]) {
                            ;(s.label = r[2]), s.ops.push(i)
                            break
                          }
                          r[2] && s.ops.pop(), s.trys.pop()
                          continue
                      }
                      i = e.call(t, s)
                    } catch (t) {
                      ;(i = [6, t]), (o = 0)
                    } finally {
                      n = r = 0
                    }
                  if (5 & i[0]) throw i[1]
                  return { value: i[0] ? i[1] : void 0, done: !0 }
                })([i, a])
              }
            }
          },
        i =
          (this && this.__values) ||
          function(t) {
            var e = 'function' == typeof Symbol && Symbol.iterator,
              n = e && t[e],
              o = 0
            if (n) return n.call(t)
            if (t && 'number' == typeof t.length)
              return {
                next: function() {
                  return t && o >= t.length && (t = void 0), { value: t && t[o++], done: !t }
                }
              }
            throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Observable = e.MultiObserver = e.Observer = e.ObserverEventState = void 0)
      var s = n(19),
        a = (function() {
          function t(t, e, n, o) {
            void 0 === e && (e = !1), this.initalize(t, e, n, o)
          }
          return (
            (t.prototype.initalize = function(t, e, n, o) {
              return (
                void 0 === e && (e = !1), (this.mask = t), (this.skipNextObservers = e), (this.target = n), (this.currentTarget = o), this
              )
            }),
            t
          )
        })()
      e.ObserverEventState = a
      var p = function(t, e, n) {
        void 0 === n && (n = null),
          (this.callback = t),
          (this.mask = e),
          (this.scope = n),
          (this.unregisterOnNextCall = !1),
          (this._willBeUnregistered = !1)
      }
      e.Observer = p
      var u = (function() {
        function t() {
          ;(this._observers = null), (this._observables = null)
        }
        return (
          (t.Watch = function(e, n, o, r) {
            var s, a
            void 0 === o && (o = -1), void 0 === r && (r = null)
            var p = new t()
            ;(p._observers = new Array()), (p._observables = e)
            try {
              for (var u = i(e), l = u.next(); !l.done; l = u.next()) {
                var c = l.value.add(n, o, !1, r)
                c && p._observers.push(c)
              }
            } catch (t) {
              s = { error: t }
            } finally {
              try {
                l && !l.done && (a = u.return) && a.call(u)
              } finally {
                if (s) throw s.error
              }
            }
            return p
          }),
          (t.prototype.dispose = function() {
            if (this._observers && this._observables)
              for (var t = 0; t < this._observers.length; t++) this._observables[t].remove(this._observers[t])
            ;(this._observers = null), (this._observables = null)
          }),
          t
        )
      })()
      e.MultiObserver = u
      var l = (function() {
        function t(t) {
          ;(this._observers = new Array()), (this._onObserverAdded = null), (this._eventState = new a(0)), t && (this._onObserverAdded = t)
        }
        return (
          (t.prototype.add = function(t, e, n, o, r) {
            if ((void 0 === e && (e = -1), void 0 === n && (n = !1), void 0 === o && (o = null), void 0 === r && (r = !1), !t)) return null
            var i = new p(t, e, o)
            return (
              (i.unregisterOnNextCall = r),
              n ? this._observers.unshift(i) : this._observers.push(i),
              this._onObserverAdded && this._onObserverAdded(i),
              i
            )
          }),
          (t.prototype.addOnce = function(t) {
            return this.add(t, void 0, void 0, void 0, !0)
          }),
          (t.prototype.remove = function(t) {
            return !!t && -1 !== this._observers.indexOf(t) && (this._deferUnregister(t), !0)
          }),
          (t.prototype.removeCallback = function(t, e) {
            for (var n = 0; n < this._observers.length; n++)
              if (this._observers[n].callback === t && (!e || e === this._observers[n].scope))
                return this._deferUnregister(this._observers[n]), !0
            return !1
          }),
          (t.prototype.notifyObservers = function(t, e, n, o) {
            var r, s
            if ((void 0 === e && (e = -1), !this._observers.length)) return !0
            var a = this._eventState
            ;(a.mask = e), (a.target = n), (a.currentTarget = o), (a.skipNextObservers = !1), (a.lastReturnValue = t)
            try {
              for (var p = i(this._observers), u = p.next(); !u.done; u = p.next()) {
                var l = u.value
                if (
                  !l._willBeUnregistered &&
                  (l.mask & e &&
                    (l.scope ? (a.lastReturnValue = l.callback.apply(l.scope, [t, a])) : (a.lastReturnValue = l.callback(t, a)),
                    l.unregisterOnNextCall && this._deferUnregister(l)),
                  a.skipNextObservers)
                )
                  return !1
              }
            } catch (t) {
              r = { error: t }
            } finally {
              try {
                u && !u.done && (s = p.return) && s.call(p)
              } finally {
                if (r) throw r.error
              }
            }
            return !0
          }),
          (t.prototype.notifyObserversWithPromise = function(t, e, n, o) {
            var r = this
            void 0 === e && (e = -1)
            var i = Promise.resolve(t)
            if (!this._observers.length) return i
            var s = this._eventState
            return (
              (s.mask = e),
              (s.target = n),
              (s.currentTarget = o),
              (s.skipNextObservers = !1),
              this._observers.forEach(function(n) {
                s.skipNextObservers ||
                  n._willBeUnregistered ||
                  (n.mask & e &&
                    ((i = n.scope
                      ? i.then(function(e) {
                          return (s.lastReturnValue = e), n.callback.apply(n.scope, [t, s])
                        })
                      : i.then(function(e) {
                          return (s.lastReturnValue = e), n.callback(t, s)
                        })),
                    n.unregisterOnNextCall && r._deferUnregister(n)))
              }),
              i.then(function() {
                return t
              })
            )
          }),
          (t.prototype.notifyObserver = function(t, e, n) {
            void 0 === n && (n = -1)
            var o = this._eventState
            ;(o.mask = n), (o.skipNextObservers = !1), t.callback(e, o)
          }),
          (t.prototype.hasObservers = function() {
            return this._observers.length > 0
          }),
          (t.prototype.clear = function() {
            ;(this._observers = new Array()), (this._onObserverAdded = null)
          }),
          (t.prototype.clone = function() {
            var e = new t()
            return (e._observers = this._observers.slice(0)), e
          }),
          (t.prototype.hasSpecificMask = function(t) {
            var e, n
            void 0 === t && (t = -1)
            try {
              for (var o = i(this._observers), r = o.next(); !r.done; r = o.next()) {
                var s = r.value
                if (s.mask & t || s.mask === t) return !0
              }
            } catch (t) {
              e = { error: t }
            } finally {
              try {
                r && !r.done && (n = o.return) && n.call(o)
              } finally {
                if (e) throw e.error
              }
            }
            return !1
          }),
          (t.prototype._deferUnregister = function(t) {
            var e = this
            ;(t.unregisterOnNextCall = !1),
              (t._willBeUnregistered = !0),
              s.executeTask(function() {
                return o(e, void 0, void 0, function() {
                  return r(this, function(e) {
                    return [2, this._remove(t)]
                  })
                })
              })
          }),
          (t.prototype._remove = function(t) {
            if (!t) return !1
            var e = this._observers.indexOf(t)
            return -1 !== e && (this._observers.splice(e, 1), !0)
          }),
          t
        )
      })()
      e.Observable = l
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Vector4 = void 0)
      var o = n(2),
        r = n(6),
        i = n(3),
        s = (function() {
          function t(t, e, n, o) {
            ;(this.x = t), (this.y = e), (this.z = n), (this.w = o)
          }
          return (
            (t.Add = function(e, n) {
              return new t(e.x, e.y, e.z, e.w).addInPlace(n)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2], e[n + 3])
            }),
            (t.FromArrayToRef = function(t, e, n) {
              ;(n.x = t[e]), (n.y = t[e + 1]), (n.z = t[e + 2]), (n.w = t[e + 3])
            }),
            (t.FromFloatArrayToRef = function(e, n, o) {
              t.FromArrayToRef(e, n, o)
            }),
            (t.FromFloatsToRef = function(t, e, n, o, r) {
              ;(r.x = t), (r.y = e), (r.z = n), (r.w = o)
            }),
            (t.Zero = function() {
              return new t(0, 0, 0, 0)
            }),
            (t.One = function() {
              return new t(1, 1, 1, 1)
            }),
            (t.Normalize = function(e) {
              var n = t.Zero()
              return t.NormalizeToRef(e, n), n
            }),
            (t.NormalizeToRef = function(t, e) {
              e.copyFrom(t), e.normalize()
            }),
            (t.Minimize = function(e, n) {
              var o = new t(e.x, e.y, e.z, e.w)
              return o.minimizeInPlace(n), o
            }),
            (t.Maximize = function(e, n) {
              var o = new t(e.x, e.y, e.z, e.w)
              return o.maximizeInPlace(n), o
            }),
            (t.Distance = function(e, n) {
              return Math.sqrt(t.DistanceSquared(e, n))
            }),
            (t.DistanceSquared = function(t, e) {
              var n = t.x - e.x,
                o = t.y - e.y,
                r = t.z - e.z,
                i = t.w - e.w
              return n * n + o * o + r * r + i * i
            }),
            (t.Center = function(e, n) {
              var o = t.Add(e, n)
              return o.scaleInPlace(0.5), o
            }),
            (t.TransformNormal = function(e, n) {
              var o = t.Zero()
              return t.TransformNormalToRef(e, n, o), o
            }),
            (t.TransformNormalToRef = function(t, e, n) {
              var o = e.m,
                r = t.x * o[0] + t.y * o[4] + t.z * o[8],
                i = t.x * o[1] + t.y * o[5] + t.z * o[9],
                s = t.x * o[2] + t.y * o[6] + t.z * o[10]
              ;(n.x = r), (n.y = i), (n.z = s), (n.w = t.w)
            }),
            (t.TransformNormalFromFloatsToRef = function(t, e, n, o, r, i) {
              var s = r.m
              ;(i.x = t * s[0] + e * s[4] + n * s[8]),
                (i.y = t * s[1] + e * s[5] + n * s[9]),
                (i.z = t * s[2] + e * s[6] + n * s[10]),
                (i.w = o)
            }),
            (t.prototype.toString = function() {
              return '{X: ' + this.x + ' Y:' + this.y + ' Z:' + this.z + ' W:' + this.w + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Vector4'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.x || 0
              return (t = (397 * (t = (397 * (t = (397 * t) ^ (this.y || 0))) ^ (this.z || 0))) ^ (this.w || 0))
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), (t[e + 3] = this.w), this
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.x + e.x, this.y + e.y, this.z + e.z, this.w + e.w)
            }),
            (t.prototype.addToRef = function(t, e) {
              return (e.x = this.x + t.x), (e.y = this.y + t.y), (e.z = this.z + t.z), (e.w = this.w + t.w), this
            }),
            (t.prototype.subtractInPlace = function(t) {
              return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.x - e.x, this.y - e.y, this.z - e.z, this.w - e.w)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.x = this.x - t.x), (e.y = this.y - t.y), (e.z = this.z - t.z), (e.w = this.w - t.w), this
            }),
            (t.prototype.subtractFromFloats = function(e, n, o, r) {
              return new t(this.x - e, this.y - n, this.z - o, this.w - r)
            }),
            (t.prototype.subtractFromFloatsToRef = function(t, e, n, o, r) {
              return (r.x = this.x - t), (r.y = this.y - e), (r.z = this.z - n), (r.w = this.w - o), this
            }),
            (t.prototype.negate = function() {
              return new t(-this.x, -this.y, -this.z, -this.w)
            }),
            (t.prototype.scaleInPlace = function(t) {
              return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this
            }),
            (t.prototype.scale = function(e) {
              return new t(this.x * e, this.y * e, this.z * e, this.w * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.x = this.x * t), (e.y = this.y * t), (e.z = this.z * t), (e.w = this.w * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.x += this.x * t), (e.y += this.y * t), (e.z += this.z * t), (e.w += this.w * t), this
            }),
            (t.prototype.equals = function(t) {
              return t && this.x === t.x && this.y === t.y && this.z === t.z && this.w === t.w
            }),
            (t.prototype.equalsWithEpsilon = function(t, e) {
              return (
                void 0 === e && (e = o.Epsilon),
                t &&
                  r.Scalar.WithinEpsilon(this.x, t.x, e) &&
                  r.Scalar.WithinEpsilon(this.y, t.y, e) &&
                  r.Scalar.WithinEpsilon(this.z, t.z, e) &&
                  r.Scalar.WithinEpsilon(this.w, t.w, e)
              )
            }),
            (t.prototype.equalsToFloats = function(t, e, n, o) {
              return this.x === t && this.y === e && this.z === n && this.w === o
            }),
            (t.prototype.multiplyInPlace = function(t) {
              return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.x * e.x, this.y * e.y, this.z * e.z, this.w * e.w)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.x = this.x * t.x), (e.y = this.y * t.y), (e.z = this.z * t.z), (e.w = this.w * t.w), this
            }),
            (t.prototype.multiplyByFloats = function(e, n, o, r) {
              return new t(this.x * e, this.y * n, this.z * o, this.w * r)
            }),
            (t.prototype.divide = function(e) {
              return new t(this.x / e.x, this.y / e.y, this.z / e.z, this.w / e.w)
            }),
            (t.prototype.divideToRef = function(t, e) {
              return (e.x = this.x / t.x), (e.y = this.y / t.y), (e.z = this.z / t.z), (e.w = this.w / t.w), this
            }),
            (t.prototype.divideInPlace = function(t) {
              return this.divideToRef(t, this)
            }),
            (t.prototype.minimizeInPlace = function(t) {
              return (
                t.x < this.x && (this.x = t.x),
                t.y < this.y && (this.y = t.y),
                t.z < this.z && (this.z = t.z),
                t.w < this.w && (this.w = t.w),
                this
              )
            }),
            (t.prototype.maximizeInPlace = function(t) {
              return (
                t.x > this.x && (this.x = t.x),
                t.y > this.y && (this.y = t.y),
                t.z > this.z && (this.z = t.z),
                t.w > this.w && (this.w = t.w),
                this
              )
            }),
            (t.prototype.floor = function() {
              return new t(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z), Math.floor(this.w))
            }),
            (t.prototype.fract = function() {
              return new t(
                this.x - Math.floor(this.x),
                this.y - Math.floor(this.y),
                this.z - Math.floor(this.z),
                this.w - Math.floor(this.w)
              )
            }),
            (t.prototype.length = function() {
              return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            }),
            (t.prototype.lengthSquared = function() {
              return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            }),
            (t.prototype.normalize = function() {
              var t = this.length()
              return 0 === t ? this : this.scaleInPlace(1 / t)
            }),
            (t.prototype.toVector3 = function() {
              return new i.Vector3(this.x, this.y, this.z)
            }),
            (t.prototype.clone = function() {
              return new t(this.x, this.y, this.z, this.w)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.x = t.x), (this.y = t.y), (this.z = t.z), (this.w = t.w), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n, o) {
              return (this.x = t), (this.y = e), (this.z = n), (this.w = o), this
            }),
            (t.prototype.set = function(t, e, n, o) {
              return this.copyFromFloats(t, e, n, o)
            }),
            (t.prototype.setAll = function(t) {
              return (this.x = this.y = this.z = this.w = t), this
            }),
            t
          )
        })()
      e.Vector4 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Angle = void 0)
      var o = (function() {
        function t(t) {
          ;(this._radians = t), this._radians < 0 && (this._radians += 2 * Math.PI)
        }
        return (
          (t.BetweenTwoPoints = function(e, n) {
            var o = n.subtract(e)
            return new t(Math.atan2(o.y, o.x))
          }),
          (t.FromRadians = function(e) {
            return new t(e)
          }),
          (t.FromDegrees = function(e) {
            return new t((e * Math.PI) / 180)
          }),
          (t.prototype.degrees = function() {
            return (180 * this._radians) / Math.PI
          }),
          (t.prototype.radians = function() {
            return this._radians
          }),
          t
        )
      })()
      e.Angle = o
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Arc2 = void 0)
      var o = n(22),
        r = n(15),
        i = n(2),
        s = function(t, e, n) {
          ;(this.startPoint = t), (this.midPoint = e), (this.endPoint = n)
          var s = Math.pow(e.x, 2) + Math.pow(e.y, 2),
            a = (Math.pow(t.x, 2) + Math.pow(t.y, 2) - s) / 2,
            p = (s - Math.pow(n.x, 2) - Math.pow(n.y, 2)) / 2,
            u = (t.x - e.x) * (e.y - n.y) - (e.x - n.x) * (t.y - e.y)
          ;(this.centerPoint = new r.Vector2((a * (e.y - n.y) - p * (t.y - e.y)) / u, ((t.x - e.x) * p - (e.x - n.x) * a) / u)),
            (this.radius = this.centerPoint.subtract(this.startPoint).length()),
            (this.startAngle = o.Angle.BetweenTwoPoints(this.centerPoint, this.startPoint))
          var l = this.startAngle.degrees(),
            c = o.Angle.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
            h = o.Angle.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees()
          c - l > 180 && (c -= 360),
            c - l < -180 && (c += 360),
            h - c > 180 && (h -= 360),
            h - c < -180 && (h += 360),
            (this.orientation = c - l < 0 ? i.Orientation.CW : i.Orientation.CCW),
            (this.angle = o.Angle.FromDegrees(this.orientation === i.Orientation.CW ? l - h : h - l))
        }
      e.Arc2 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Color4 = void 0)
      var o = n(6),
        r = n(2),
        i = (function() {
          function t(t, e, n, o) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === n && (n = 0),
              void 0 === o && (o = 1),
              (this.r = t),
              (this.g = e),
              (this.b = n),
              (this.a = o)
          }
          return (
            (t.FromHexString = function(e) {
              if ('#' !== e.substring(0, 1) || 9 !== e.length) return new t(0, 0, 0, 0)
              var n = parseInt(e.substring(1, 3), 16),
                o = parseInt(e.substring(3, 5), 16),
                r = parseInt(e.substring(5, 7), 16),
                i = parseInt(e.substring(7, 9), 16)
              return t.FromInts(n, o, r, i)
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t(0, 0, 0, 0)
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              ;(o.r = t.r + (e.r - t.r) * n), (o.g = t.g + (e.g - t.g) * n), (o.b = t.b + (e.b - t.b) * n), (o.a = t.a + (e.a - t.a) * n)
            }),
            (t.Red = function() {
              return new t(1, 0, 0, 1)
            }),
            (t.Green = function() {
              return new t(0, 1, 0, 1)
            }),
            (t.Blue = function() {
              return new t(0, 0, 1, 1)
            }),
            (t.Black = function() {
              return new t(0, 0, 0, 1)
            }),
            (t.White = function() {
              return new t(1, 1, 1, 1)
            }),
            (t.Purple = function() {
              return new t(0.5, 0, 0.5, 1)
            }),
            (t.Magenta = function() {
              return new t(1, 0, 1, 1)
            }),
            (t.Yellow = function() {
              return new t(1, 1, 0, 1)
            }),
            (t.Gray = function() {
              return new t(0.5, 0.5, 0.5, 1)
            }),
            (t.Teal = function() {
              return new t(0, 1, 1, 1)
            }),
            (t.Clear = function() {
              return new t(0, 0, 0, 0)
            }),
            (t.FromColor3 = function(e, n) {
              return void 0 === n && (n = 1), new t(e.r, e.g, e.b, n)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2], e[n + 3])
            }),
            (t.FromInts = function(e, n, o, r) {
              return new t(e / 255, n / 255, o / 255, r / 255)
            }),
            (t.CheckColors4 = function(t, e) {
              if (t.length === 3 * e) {
                for (var n = [], o = 0; o < t.length; o += 3) {
                  var r = (o / 3) * 4
                  ;(n[r] = t[o]), (n[r + 1] = t[o + 1]), (n[r + 2] = t[o + 2]), (n[r + 3] = 1)
                }
                return n
              }
              return t
            }),
            (t.prototype.addInPlace = function(t) {
              return (this.r += t.r), (this.g += t.g), (this.b += t.b), (this.a += t.a), this
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), (t[e + 3] = this.a), this
            }),
            (t.prototype.add = function(e) {
              return new t(this.r + e.r, this.g + e.g, this.b + e.b, this.a + e.a)
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.r - e.r, this.g - e.g, this.b - e.b, this.a - e.a)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.r = this.r - t.r), (e.g = this.g - t.g), (e.b = this.b - t.b), (e.a = this.a - t.a), this
            }),
            (t.prototype.scale = function(e) {
              return new t(this.r * e, this.g * e, this.b * e, this.a * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.r = this.r * t), (e.g = this.g * t), (e.b = this.b * t), (e.a = this.a * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.r += this.r * t), (e.g += this.g * t), (e.b += this.b * t), (e.a += this.a * t), this
            }),
            (t.prototype.clampToRef = function(t, e, n) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = 1),
                (n.r = o.Scalar.Clamp(this.r, t, e)),
                (n.g = o.Scalar.Clamp(this.g, t, e)),
                (n.b = o.Scalar.Clamp(this.b, t, e)),
                (n.a = o.Scalar.Clamp(this.a, t, e)),
                this
              )
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.r * e.r, this.g * e.g, this.b * e.b, this.a * e.a)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.r = this.r * t.r), (e.g = this.g * t.g), (e.b = this.b * t.b), (e.a = this.a * t.a), e
            }),
            (t.prototype.toString = function() {
              return '{R: ' + this.r + ' G:' + this.g + ' B:' + this.b + ' A:' + this.a + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Color4'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.r || 0
              return (t = (397 * (t = (397 * (t = (397 * t) ^ (this.g || 0))) ^ (this.b || 0))) ^ (this.a || 0))
            }),
            (t.prototype.clone = function() {
              return new t(this.r, this.g, this.b, this.a)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.r = t.r), (this.g = t.g), (this.b = t.b), (this.a = t.a), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n, o) {
              return (this.r = t), (this.g = e), (this.b = n), (this.a = o), this
            }),
            (t.prototype.set = function(t, e, n, o) {
              return this.copyFromFloats(t, e, n, o)
            }),
            (t.prototype.toHexString = function() {
              var t = (255 * this.r) | 0,
                e = (255 * this.g) | 0,
                n = (255 * this.b) | 0,
                r = (255 * this.a) | 0
              return '#' + o.Scalar.ToHex(t) + o.Scalar.ToHex(e) + o.Scalar.ToHex(n) + o.Scalar.ToHex(r)
            }),
            (t.prototype.toLinearSpace = function() {
              var e = new t()
              return this.toLinearSpaceToRef(e), e
            }),
            (t.prototype.toLinearSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, r.ToLinearSpace)),
                (t.g = Math.pow(this.g, r.ToLinearSpace)),
                (t.b = Math.pow(this.b, r.ToLinearSpace)),
                (t.a = this.a),
                this
              )
            }),
            (t.prototype.toGammaSpace = function() {
              var e = new t()
              return this.toGammaSpaceToRef(e), e
            }),
            (t.prototype.toGammaSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, r.ToGammaSpace)),
                (t.g = Math.pow(this.g, r.ToGammaSpace)),
                (t.b = Math.pow(this.b, r.ToGammaSpace)),
                (t.a = this.a),
                this
              )
            }),
            t
          )
        })()
      e.Color4 = i
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Plane = void 0)
      var o = n(3),
        r = n(11),
        i = n(9),
        s = (function() {
          function t(t, e, n, r) {
            ;(this.normal = new o.Vector3(t, e, n)), (this.d = r)
          }
          return (
            (t.FromArray = function(e) {
              return new t(e[0], e[1], e[2], e[3])
            }),
            (t.FromPoints = function(e, n, o) {
              var r = new t(0, 0, 0, 0)
              return r.copyFromPoints(e, n, o), r
            }),
            (t.FromPositionAndNormal = function(e, n) {
              var o = new t(0, 0, 0, 0)
              return n.normalize(), (o.normal = n), (o.d = -(n.x * e.x + n.y * e.y + n.z * e.z)), o
            }),
            (t.SignedDistanceToPlaneFromPositionAndNormal = function(t, e, n) {
              var r = -(e.x * t.x + e.y * t.y + e.z * t.z)
              return o.Vector3.Dot(n, e) + r
            }),
            (t.prototype.asArray = function() {
              return [this.normal.x, this.normal.y, this.normal.z, this.d]
            }),
            (t.prototype.clone = function() {
              return new t(this.normal.x, this.normal.y, this.normal.z, this.d)
            }),
            (t.prototype.getClassName = function() {
              return 'Plane'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.normal.getHashCode()
              return (t = (397 * t) ^ (this.d || 0))
            }),
            (t.prototype.normalize = function() {
              var t = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z),
                e = 0
              return 0 !== t && (e = 1 / t), (this.normal.x *= e), (this.normal.y *= e), (this.normal.z *= e), (this.d *= e), this
            }),
            (t.prototype.transform = function(e) {
              var n = i.MathTmp.Matrix[0]
              r.Matrix.TransposeToRef(e, n)
              var o = n.m,
                s = this.normal.x,
                a = this.normal.y,
                p = this.normal.z,
                u = this.d
              return new t(
                s * o[0] + a * o[1] + p * o[2] + u * o[3],
                s * o[4] + a * o[5] + p * o[6] + u * o[7],
                s * o[8] + a * o[9] + p * o[10] + u * o[11],
                s * o[12] + a * o[13] + p * o[14] + u * o[15]
              )
            }),
            (t.prototype.dotCoordinate = function(t) {
              return this.normal.x * t.x + this.normal.y * t.y + this.normal.z * t.z + this.d
            }),
            (t.prototype.copyFromPoints = function(t, e, n) {
              var o,
                r = e.x - t.x,
                i = e.y - t.y,
                s = e.z - t.z,
                a = n.x - t.x,
                p = n.y - t.y,
                u = n.z - t.z,
                l = i * u - s * p,
                c = s * a - r * u,
                h = r * p - i * a,
                d = Math.sqrt(l * l + c * c + h * h)
              return (
                (o = 0 !== d ? 1 / d : 0),
                (this.normal.x = l * o),
                (this.normal.y = c * o),
                (this.normal.z = h * o),
                (this.d = -(this.normal.x * t.x + this.normal.y * t.y + this.normal.z * t.z)),
                this
              )
            }),
            (t.prototype.isFrontFacingTo = function(t, e) {
              return o.Vector3.Dot(this.normal, t) <= e
            }),
            (t.prototype.signedDistanceTo = function(t) {
              return o.Vector3.Dot(t, this.normal) + this.d
            }),
            t
          )
        })()
      e.Plane = s
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__assign) ||
          function() {
            return (i =
              Object.assign ||
              function(t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          },
        s =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.AnimationState = void 0)
      var a = n(0),
        p = n(1),
        u = { looping: !0, speed: 1, weight: 1 },
        l = (function(t) {
          function e(e, n) {
            void 0 === n && (n = u)
            var o = t.call(this) || this
            return (
              (o.isAnimationClip = !0),
              (o.looping = u.looping),
              (o.weight = u.weight),
              (o.playing = !1),
              (o.shouldReset = !1),
              (o.speed = u.speed),
              (o.name = p.newId('AnimClip')),
              (o.clip = e),
              o.setParams(i({}, n)),
              o
            )
          }
          return (
            r(e, t),
            (e.prototype.setParams = function(t) {
              return (this.looping = void 0 !== t.looping ? t.looping : this.looping), (this.speed = t.speed || this.speed), this
            }),
            (e.prototype.toJSON = function() {
              var e = JSON.parse(JSON.stringify(t.prototype.toJSON.call(this)))
              return this.shouldReset && (this.shouldReset = !1), e
            }),
            (e.prototype.play = function() {
              this.playing = !0
            }),
            (e.prototype.pause = function() {
              this.playing = !1
            }),
            (e.prototype.reset = function() {
              this.shouldReset = !0
            }),
            (e.prototype.stop = function() {
              this.reset(), this.pause()
            }),
            s([a.ObservableComponent.readonly], e.prototype, 'clip', void 0),
            s([a.ObservableComponent.field], e.prototype, 'looping', void 0),
            s([a.ObservableComponent.field], e.prototype, 'weight', void 0),
            s([a.ObservableComponent.field], e.prototype, 'playing', void 0),
            s([a.ObservableComponent.field], e.prototype, 'shouldReset', void 0),
            s([a.ObservableComponent.field], e.prototype, 'speed', void 0),
            s([a.ObservableComponent.readonly], e.prototype, 'name', void 0),
            e
          )
        })(a.ObservableComponent)
      e.AnimationState = l
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.AVATAR_OBSERVABLE = e.InputEventType = void 0),
        (function(t) {
          ;(t[(t.DOWN = 0)] = 'DOWN'), (t[(t.UP = 1)] = 'UP')
        })(e.InputEventType || (e.InputEventType = {})),
        (e.AVATAR_OBSERVABLE = 'AVATAR_OBSERVABLE')
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.PhysicsCast = void 0)
      var o,
        r = n(5),
        i = n(1),
        s = n(29)
      !(function(t) {
        ;(t.HitFirst = 'rqhf'), (t.HitAll = 'rqha')
      })(o || (o = {}))
      var a = (function() {
        function t() {
          this.queries = {}
        }
        return (
          Object.defineProperty(t, 'instance', {
            get: function() {
              return t.ensureInstance(), t._instance
            },
            enumerable: !1,
            configurable: !0
          }),
          (t.ensureInstance = function() {
            t._instance || (t._instance = new t())
          }),
          (t.prototype.getRayFromCamera = function(t) {
            var e = s.Camera.instance.rotation,
              n = r.Matrix.Identity()
            e.toRotationMatrix(n)
            var o = r.Vector3.TransformCoordinates(r.Vector3.Forward(), n)
            return { origin: s.Camera.instance.position, direction: o, distance: t }
          }),
          (t.prototype.getRayFromPositions = function(t, e) {
            var n = e.subtract(t),
              o = n.length()
            return { origin: t, direction: n.normalize(), distance: o }
          }),
          (t.prototype.hitFirst = function(t, e, n) {
            var r = 'number' == typeof n ? o.HitFirst + n : i.uuid()
            ;(this.queries[r] = e), dcl && dcl.query('raycast', { queryId: r, queryType: 'HitFirst', ray: t })
          }),
          (t.prototype.hitAll = function(t, e, n) {
            var r = 'number' == typeof n ? o.HitAll + n : i.uuid()
            ;(this.queries[r] = e), dcl && dcl.query('raycast', { queryId: r, queryType: 'HitAll', ray: t })
          }),
          (t.prototype.hitFirstAvatar = function(t, e) {
            i.log('not implemented yet')
          }),
          (t.prototype.hitAllAvatars = function(t, e) {
            i.log('not implemented yet')
          }),
          (t.prototype.handleRaycastHitFirstResponse = function(t) {
            this.queries[t.payload.queryId](t.payload.payload), delete this.queries[t.payload.queryId]
          }),
          (t.prototype.handleRaycastHitAllResponse = function(t) {
            this.queries[t.payload.queryId](t.payload.payload), delete this.queries[t.payload.queryId]
          }),
          t
        )
      })()
      e.PhysicsCast = a
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Camera = void 0)
      var o = n(5),
        r = (function() {
          function t() {
            var t = this
            ;(this.position = new o.Vector3()),
              (this.rotation = new o.Quaternion()),
              (this.feetPosition = new o.Vector3()),
              (this.worldPosition = new o.Vector3()),
              (this.lastEventPosition = { x: 0, y: 0, z: 0 }),
              (this.lastEventWorldPosition = { x: 0, y: 0, z: 0 }),
              (this.lastEventRotation = { x: 0, y: 0, z: 0, w: 1 }),
              (this._playerHeight = 1.6),
              'undefined' != typeof dcl &&
                (dcl.subscribe('positionChanged'),
                dcl.subscribe('rotationChanged'),
                dcl.onEvent(function(e) {
                  switch (e.type) {
                    case 'positionChanged':
                      t.positionChanged(e.data)
                      break
                    case 'rotationChanged':
                      t.rotationChanged(e.data)
                  }
                })),
              Object.defineProperty(this.position, 'x', {
                get: function() {
                  return t.lastEventPosition.x
                }
              }),
              Object.defineProperty(this.position, 'y', {
                get: function() {
                  return t.lastEventPosition.y
                }
              }),
              Object.defineProperty(this.position, 'z', {
                get: function() {
                  return t.lastEventPosition.z
                }
              }),
              Object.defineProperty(this.worldPosition, 'x', {
                get: function() {
                  return t.lastEventWorldPosition.x
                }
              }),
              Object.defineProperty(this.worldPosition, 'y', {
                get: function() {
                  return t.lastEventWorldPosition.y
                }
              }),
              Object.defineProperty(this.worldPosition, 'z', {
                get: function() {
                  return t.lastEventWorldPosition.z
                }
              }),
              Object.defineProperty(this.feetPosition, 'x', {
                get: function() {
                  return t.lastEventPosition.x
                }
              }),
              Object.defineProperty(this.feetPosition, 'y', {
                get: function() {
                  return t.lastEventPosition.y - t.playerHeight
                }
              }),
              Object.defineProperty(this.feetPosition, 'z', {
                get: function() {
                  return t.lastEventPosition.z
                }
              }),
              Object.defineProperty(this.rotation, 'x', {
                get: function() {
                  return t.lastEventRotation.x
                }
              }),
              Object.defineProperty(this.rotation, 'y', {
                get: function() {
                  return t.lastEventRotation.y
                }
              }),
              Object.defineProperty(this.rotation, 'z', {
                get: function() {
                  return t.lastEventRotation.z
                }
              }),
              Object.defineProperty(this.rotation, 'w', {
                get: function() {
                  return t.lastEventRotation.w
                }
              })
          }
          return (
            Object.defineProperty(t, 'instance', {
              get: function() {
                return t._instance || (t._instance = new t()), t._instance
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'playerHeight', {
              get: function() {
                return this._playerHeight
              },
              enumerable: !1,
              configurable: !0
            }),
            (t.prototype.positionChanged = function(t) {
              ;(this.lastEventPosition = t.position),
                (this.lastEventWorldPosition = t.cameraPosition),
                (this._playerHeight = t.playerHeight)
            }),
            (t.prototype.rotationChanged = function(t) {
              this.lastEventRotation = t.quaternion
            }),
            t
          )
        })()
      e.Camera = r
    },
    function(t, e, n) {
      'use strict'
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function(t, e, n, o) {
                void 0 === o && (o = n),
                  Object.defineProperty(t, o, {
                    enumerable: !0,
                    get: function() {
                      return e[n]
                    }
                  })
              }
            : function(t, e, n, o) {
                void 0 === o && (o = n), (t[o] = e[n])
              }),
        r =
          (this && this.__exportStar) ||
          function(t, e) {
            for (var n in t) 'default' === n || Object.prototype.hasOwnProperty.call(e, n) || o(e, t, n)
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.engine = void 0),
        r(n(31), e),
        r(n(17), e),
        r(n(0), e),
        r(n(12), e),
        r(n(7), e),
        r(n(19), e),
        r(n(1), e),
        r(n(20), e),
        r(n(18), e),
        r(n(8), e),
        r(n(33), e),
        r(n(34), e)
      var i = n(35),
        s = n(17),
        a = new (n(12).Entity)('scene')
      a.uuid = '0'
      var p = new s.Engine(a)
      ;(e.engine = p),
        (n(0).DisposableComponent.engine = p),
        'undefined' != typeof dcl && p.addSystem(new i.DecentralandSynchronizationSystem(dcl), 1 / 0)
      var u = n(14)
      p.addSystem(u.uuidEventSystem),
        p.addSystem(u.pointerEventSystem),
        p.addSystem(u.raycastEventSystem),
        r(n(27), e),
        r(n(4), e),
        r(n(14), e),
        r(n(13), e),
        r(n(29), e),
        r(n(5), e),
        r(n(26), e),
        r(n(16), e),
        r(n(44), e),
        r(n(45), e),
        r(n(46), e),
        r(n(47), e),
        r(n(48), e),
        r(n(49), e),
        r(n(28), e)
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Attachable = void 0)
      var o = (function() {
        function t() {}
        return (
          (t.AVATAR = {
            getEntityRepresentation: function(t) {
              return t.avatarEntity
            }
          }),
          (t.FIRST_PERSON_CAMERA = {
            getEntityRepresentation: function(t) {
              return t.firstPersonCameraEntity
            }
          }),
          t
        )
      })()
      e.Attachable = o
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.ComponentGroup = void 0)
      var o = n(0),
        r = (function() {
          function t() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
            if (((this.entities = []), (this.active = !1), (this._requiresNames = []), !t))
              throw new Error('ComponentGroup: Could not load the requires list')
            if (!(t instanceof Array)) throw new Error('ComponentGroup: requires list is not an Array')
            Object.defineProperty(this, 'requires', {
              get: function() {
                return t.slice()
              }
            }),
              Object.defineProperty(this, 'requiresNames', {
                get: function() {
                  return this._requiresNames.slice()
                }
              })
            for (
              var n = function(e) {
                  var n = t[e],
                    i = null
                  if (!n) throw new Error('ComponentGroup: the required component at location ' + e + ' is invalid')
                  try {
                    i = o.getComponentName(n)
                  } catch (t) {
                    throw new Error(
                      'ComponentGroup: the required component at location ' +
                        e +
                        ' is not registered as a @Component. Remember to provide the class of the component, not the name'
                    )
                  }
                  if (
                    r._requiresNames.some(function(t) {
                      return t === i
                    })
                  )
                    throw new Error('ComponentGroup: the required component list has a repeated name ' + i)
                  r._requiresNames.push(i)
                },
                r = this,
                i = 0;
              i < t.length;
              i++
            )
              n(i)
          }
          return (
            (t.prototype.hasEntity = function(t) {
              return !!t.isAddedToEngine() && -1 !== this.entities.indexOf(t)
            }),
            (t.prototype.addEntity = function(t) {
              if (!t.isAddedToEngine()) throw new TypeError('ComponentGroup: Cannot add a entity that is not added to the engine')
              ;-1 === this.entities.indexOf(t) && this.entities.push(t)
            }),
            (t.prototype.removeEntity = function(t) {
              var e = this.entities.indexOf(t)
              ;-1 !== e && this.entities.splice(e, 1)
            }),
            (t.prototype.componentRemoved = function(t, e) {
              ;-1 !== this._requiresNames.indexOf(e) && this.removeEntity(t)
            }),
            (t.prototype.meetsRequirements = function(t) {
              for (var e = 0; e < this._requiresNames.length; e++) {
                if (!(this._requiresNames[e] in t.components)) return !1
              }
              return !0
            }),
            t
          )
        })()
      e.ComponentGroup = r
    },
    function(t, e, n) {
      'use strict'
      var o
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.teleportTo = void 0),
        (e.teleportTo = function(t) {
          var e, n
          ;(e = 'requestTeleport'),
            (n = [t]),
            void 0 === o && 'undefined' != typeof dcl && (o = dcl.loadModule('@decentraland/UserActionModule')),
            void 0 !== o &&
              'undefined' != typeof dcl &&
              o.then(function(t) {
                dcl.callRpc(t.rpcHandle, e, n)
              })
        })
    },
    function(t, e, n) {
      'use strict'
      var o
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.movePlayerTo = void 0),
        (e.movePlayerTo = function(t, e) {
          var n, r
          ;(n = 'movePlayerTo'),
            (r = [t, e]),
            void 0 === o && 'undefined' != typeof dcl && (o = dcl.loadModule('@decentraland/RestrictedActionModule')),
            void 0 !== o &&
              'undefined' != typeof dcl &&
              o.then(function(t) {
                dcl.callRpc(t.rpcHandle, n, r)
              })
        })
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.DecentralandSynchronizationSystem = void 0)
      var o = n(0),
        r = n(7),
        i = n(13),
        s = (function() {
          function t(t) {
            ;(this.dcl = t), (this.cachedComponents = {})
          }
          return (
            (t.prototype.activate = function(t) {
              var e = this
              ;(this.engine = t),
                t.eventManager.addListener(r.ComponentAdded, this, this.componentAdded),
                t.eventManager.addListener(r.ComponentRemoved, this, this.componentRemoved),
                t.eventManager.addListener(o.DisposableComponentCreated, this, this.disposableComponentCreated),
                t.eventManager.addListener(o.DisposableComponentRemoved, this, this.disposableComponentRemoved),
                t.eventManager.addListener(o.DisposableComponentUpdated, this, this.disposableComponentUpdated),
                t.eventManager.addListener(r.ParentChanged, this, this.parentChanged)
              var n = t.rootEntity.uuid
              this.dcl.addEntity(n),
                this.dcl.onUpdate(function(n) {
                  t.update(n), e.presentEntities()
                }),
                this.dcl.onEvent(function(e) {
                  var n = e.data
                  switch (e.type) {
                    case 'uuidEvent':
                      t.eventManager.fireEvent(new i.UUIDEvent(n.uuid, n.payload))
                      break
                    case 'raycastResponse':
                      ;('HitFirst' === n.queryType || 'HitAll' === n.queryType) && t.eventManager.fireEvent(new i.RaycastResponse(n))
                      break
                    case 'pointerEvent':
                      t.eventManager.fireEvent(new i.PointerEvent(n.payload))
                  }
                })
            }),
            (t.prototype.onAddEntity = function(t) {
              if (t && t.isAddedToEngine()) {
                var e = t.uuid,
                  n = t.getParent()
                for (var r in (this.dcl.addEntity(e), n && this.dcl.setParent(e, n.uuid), (this.cachedComponents[e] = {}), t.components)) {
                  var i = t.components[r],
                    s = o.getComponentClassId(i)
                  if (null !== s)
                    if (o.isDisposableComponent(i)) this.dcl.attachEntityComponent(t.uuid, r, o.getComponentId(i))
                    else {
                      var a = JSON.stringify(i)
                      this.dcl.updateEntityComponent(e, r, s, a), (this.cachedComponents[e][r] = a)
                    }
                }
              }
            }),
            (t.prototype.onRemoveEntity = function(t) {
              if (t.isAddedToEngine()) {
                var e = t.uuid
                this.dcl.removeEntity(e), delete this.cachedComponents[e]
              }
            }),
            (t.prototype.presentEntities = function() {
              for (var t in this.engine.entities) {
                var e = this.engine.entities[t]
                for (var n in e.components) {
                  var r = e.components[n],
                    i = o.getComponentClassId(r)
                  if (null !== i && !o.isDisposableComponent(r)) {
                    var s = this.getJsonIfDirty(e.uuid, n, r)
                    s && (this.dcl.updateEntityComponent(e.uuid, n, i, s), this.clearDirty(e.uuid, n, r, s))
                  }
                }
              }
              for (var a in this.engine.disposableComponents) {
                ;(r = this.engine.disposableComponents[a]) instanceof o.ObservableComponent &&
                  r.dirty &&
                  (this.dcl.componentUpdated(a, JSON.stringify(r)), (r.dirty = !1))
              }
            }),
            (t.prototype.componentAdded = function(t) {
              if (t.entity.isAddedToEngine()) {
                var e = t.entity.components[t.componentName]
                if (o.isDisposableComponent(e)) this.dcl.attachEntityComponent(t.entity.uuid, t.componentName, o.getComponentId(e))
                else if (null !== t.classId) {
                  var n = JSON.stringify(e)
                  this.dcl.updateEntityComponent(t.entity.uuid, t.componentName, t.classId, n),
                    (this.cachedComponents[t.entity.uuid][t.componentName] = n)
                }
              }
            }),
            (t.prototype.componentRemoved = function(t) {
              t.entity.isAddedToEngine() &&
                (this.dcl.removeEntityComponent(t.entity.uuid, t.componentName),
                delete this.cachedComponents[t.entity.uuid][t.componentName])
            }),
            (t.prototype.disposableComponentCreated = function(t) {
              this.dcl.componentCreated(t.componentId, t.componentName, t.classId)
            }),
            (t.prototype.disposableComponentRemoved = function(t) {
              this.dcl.componentDisposed(t.componentId)
            }),
            (t.prototype.disposableComponentUpdated = function(t) {
              this.dcl.componentUpdated(t.componentId, JSON.stringify(t.component))
            }),
            (t.prototype.parentChanged = function(t) {
              this.dcl.setParent(t.entity.uuid, t.parent ? t.parent.uuid : '0')
            }),
            (t.prototype.getJsonIfDirty = function(t, e, n) {
              var o = JSON.stringify(n)
              return o !== this.cachedComponents[t][e] && o
            }),
            (t.prototype.clearDirty = function(t, e, n, o) {
              this.cachedComponents[t][e] = o
            }),
            t
          )
        })()
      e.DecentralandSynchronizationSystem = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Axis = void 0)
      var o = n(3),
        r = (function() {
          function t() {}
          return (t.X = new o.Vector3(1, 0, 0)), (t.Y = new o.Vector3(0, 1, 0)), (t.Z = new o.Vector3(0, 0, 1)), t
        })()
      e.Axis = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.BezierCurve = void 0)
      var o = (function() {
        function t() {}
        return (
          (t.Interpolate = function(t, e, n, o, r) {
            for (var i = 1 - 3 * o + 3 * e, s = 3 * o - 6 * e, a = 3 * e, p = t, u = 0; u < 5; u++) {
              var l = p * p
              ;(p -= (i * (l * p) + s * l + a * p - t) * (1 / (3 * i * l + 2 * s * p + a))), (p = Math.min(1, Math.max(0, p)))
            }
            return 3 * Math.pow(1 - p, 2) * p * n + 3 * (1 - p) * Math.pow(p, 2) * r + Math.pow(p, 3)
          }),
          t
        )
      })()
      e.BezierCurve = o
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Color3 = void 0)
      var o = n(2),
        r = n(24),
        i = n(6),
        s = (function() {
          function t(t, e, n) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), (this.r = t), (this.g = e), (this.b = n)
          }
          return (
            (t.FromHexString = function(e) {
              if ('#' !== e.substring(0, 1) || 7 !== e.length) return new t(0, 0, 0)
              var n = parseInt(e.substring(1, 3), 16),
                o = parseInt(e.substring(3, 5), 16),
                r = parseInt(e.substring(5, 7), 16)
              return t.FromInts(n, o, r)
            }),
            (t.FromArray = function(e, n) {
              return void 0 === n && (n = 0), new t(e[n], e[n + 1], e[n + 2])
            }),
            (t.FromInts = function(e, n, o) {
              return new t(e / 255, n / 255, o / 255)
            }),
            (t.Lerp = function(e, n, o) {
              var r = new t(0, 0, 0)
              return t.LerpToRef(e, n, o, r), r
            }),
            (t.LerpToRef = function(t, e, n, o) {
              ;(o.r = t.r + (e.r - t.r) * n), (o.g = t.g + (e.g - t.g) * n), (o.b = t.b + (e.b - t.b) * n)
            }),
            (t.Red = function() {
              return new t(1, 0, 0)
            }),
            (t.Green = function() {
              return new t(0, 1, 0)
            }),
            (t.Blue = function() {
              return new t(0, 0, 1)
            }),
            (t.Black = function() {
              return new t(0, 0, 0)
            }),
            (t.White = function() {
              return new t(1, 1, 1)
            }),
            (t.Purple = function() {
              return new t(0.5, 0, 0.5)
            }),
            (t.Magenta = function() {
              return new t(1, 0, 1)
            }),
            (t.Yellow = function() {
              return new t(1, 1, 0)
            }),
            (t.Gray = function() {
              return new t(0.5, 0.5, 0.5)
            }),
            (t.Teal = function() {
              return new t(0, 1, 1)
            }),
            (t.Random = function() {
              return new t(Math.random(), Math.random(), Math.random())
            }),
            (t.prototype.toString = function() {
              return '{R: ' + this.r + ' G:' + this.g + ' B:' + this.b + '}'
            }),
            (t.prototype.getClassName = function() {
              return 'Color3'
            }),
            (t.prototype.getHashCode = function() {
              var t = this.r || 0
              return (t = (397 * (t = (397 * t) ^ (this.g || 0))) ^ (this.b || 0))
            }),
            (t.prototype.toArray = function(t, e) {
              return void 0 === e && (e = 0), (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), this
            }),
            (t.prototype.toColor4 = function(t) {
              return void 0 === t && (t = 1), new r.Color4(this.r, this.g, this.b, t)
            }),
            (t.prototype.asArray = function() {
              var t = new Array()
              return this.toArray(t, 0), t
            }),
            (t.prototype.toLuminance = function() {
              return 0.3 * this.r + 0.59 * this.g + 0.11 * this.b
            }),
            (t.prototype.multiply = function(e) {
              return new t(this.r * e.r, this.g * e.g, this.b * e.b)
            }),
            (t.prototype.multiplyToRef = function(t, e) {
              return (e.r = this.r * t.r), (e.g = this.g * t.g), (e.b = this.b * t.b), this
            }),
            (t.prototype.equals = function(t) {
              return t && this.r === t.r && this.g === t.g && this.b === t.b
            }),
            (t.prototype.equalsFloats = function(t, e, n) {
              return this.r === t && this.g === e && this.b === n
            }),
            (t.prototype.scale = function(e) {
              return new t(this.r * e, this.g * e, this.b * e)
            }),
            (t.prototype.scaleToRef = function(t, e) {
              return (e.r = this.r * t), (e.g = this.g * t), (e.b = this.b * t), this
            }),
            (t.prototype.scaleAndAddToRef = function(t, e) {
              return (e.r += this.r * t), (e.g += this.g * t), (e.b += this.b * t), this
            }),
            (t.prototype.clampToRef = function(t, e, n) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = 1),
                (n.r = i.Scalar.Clamp(this.r, t, e)),
                (n.g = i.Scalar.Clamp(this.g, t, e)),
                (n.b = i.Scalar.Clamp(this.b, t, e)),
                this
              )
            }),
            (t.prototype.add = function(e) {
              return new t(this.r + e.r, this.g + e.g, this.b + e.b)
            }),
            (t.prototype.addToRef = function(t, e) {
              return (e.r = this.r + t.r), (e.g = this.g + t.g), (e.b = this.b + t.b), this
            }),
            (t.prototype.subtract = function(e) {
              return new t(this.r - e.r, this.g - e.g, this.b - e.b)
            }),
            (t.prototype.subtractToRef = function(t, e) {
              return (e.r = this.r - t.r), (e.g = this.g - t.g), (e.b = this.b - t.b), this
            }),
            (t.prototype.clone = function() {
              return new t(this.r, this.g, this.b)
            }),
            (t.prototype.copyFrom = function(t) {
              return (this.r = t.r), (this.g = t.g), (this.b = t.b), this
            }),
            (t.prototype.copyFromFloats = function(t, e, n) {
              return (this.r = t), (this.g = e), (this.b = n), this
            }),
            (t.prototype.set = function(t, e, n) {
              return this.copyFromFloats(t, e, n)
            }),
            (t.prototype.toHexString = function() {
              var t = (255 * this.r) | 0,
                e = (255 * this.g) | 0,
                n = (255 * this.b) | 0
              return '#' + i.Scalar.ToHex(t) + i.Scalar.ToHex(e) + i.Scalar.ToHex(n)
            }),
            (t.prototype.toLinearSpace = function() {
              var e = new t()
              return this.toLinearSpaceToRef(e), e
            }),
            (t.prototype.toLinearSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, o.ToLinearSpace)),
                (t.g = Math.pow(this.g, o.ToLinearSpace)),
                (t.b = Math.pow(this.b, o.ToLinearSpace)),
                this
              )
            }),
            (t.prototype.toGammaSpace = function() {
              var e = new t()
              return this.toGammaSpaceToRef(e), e
            }),
            (t.prototype.toGammaSpaceToRef = function(t) {
              return (
                (t.r = Math.pow(this.r, o.ToGammaSpace)),
                (t.g = Math.pow(this.g, o.ToGammaSpace)),
                (t.b = Math.pow(this.b, o.ToGammaSpace)),
                this
              )
            }),
            (t.prototype.toJSON = function() {
              return { r: this.r, g: this.g, b: this.b }
            }),
            t
          )
        })()
      e.Color3 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Curve3 = void 0)
      var o = n(3),
        r = (function() {
          function t(t) {
            ;(this._length = 0), (this._points = t), (this._length = this._computeLength(t))
          }
          return (
            (t.CreateQuadraticBezier = function(e, n, r, i) {
              i = i > 2 ? i : 3
              for (
                var s = new Array(),
                  a = function(t, e, n, o) {
                    return (1 - t) * (1 - t) * e + 2 * t * (1 - t) * n + t * t * o
                  },
                  p = 0;
                p <= i;
                p++
              )
                s.push(new o.Vector3(a(p / i, e.x, n.x, r.x), a(p / i, e.y, n.y, r.y), a(p / i, e.z, n.z, r.z)))
              return new t(s)
            }),
            (t.CreateCubicBezier = function(e, n, r, i, s) {
              s = s > 3 ? s : 4
              for (
                var a = new Array(),
                  p = function(t, e, n, o, r) {
                    return (1 - t) * (1 - t) * (1 - t) * e + 3 * t * (1 - t) * (1 - t) * n + 3 * t * t * (1 - t) * o + t * t * t * r
                  },
                  u = 0;
                u <= s;
                u++
              )
                a.push(new o.Vector3(p(u / s, e.x, n.x, r.x, i.x), p(u / s, e.y, n.y, r.y, i.y), p(u / s, e.z, n.z, r.z, i.z)))
              return new t(a)
            }),
            (t.CreateHermiteSpline = function(e, n, r, i, s) {
              for (var a = new Array(), p = 1 / s, u = 0; u <= s; u++) a.push(o.Vector3.Hermite(e, n, r, i, u * p))
              return new t(a)
            }),
            (t.CreateCatmullRomSpline = function(e, n, r) {
              var i = new Array(),
                s = 1 / n,
                a = 0
              if (r) {
                for (var p = e.length, u = 0; u < p; u++) {
                  a = 0
                  for (var l = 0; l < n; l++)
                    i.push(o.Vector3.CatmullRom(e[u % p], e[(u + 1) % p], e[(u + 2) % p], e[(u + 3) % p], a)), (a += s)
                }
                i.push(i[0])
              } else {
                var c = new Array()
                c.push(e[0].clone()), Array.prototype.push.apply(c, e), c.push(e[e.length - 1].clone())
                u = 0
                for (u = 0; u < c.length - 3; u++) {
                  a = 0
                  for (l = 0; l < n; l++) i.push(o.Vector3.CatmullRom(c[u], c[u + 1], c[u + 2], c[u + 3], a)), (a += s)
                }
                u--, i.push(o.Vector3.CatmullRom(c[u], c[u + 1], c[u + 2], c[u + 3], a))
              }
              return new t(i)
            }),
            (t.prototype.getPoints = function() {
              return this._points
            }),
            (t.prototype.length = function() {
              return this._length
            }),
            (t.prototype.continue = function(e) {
              for (var n = this._points[this._points.length - 1], o = this._points.slice(), r = e.getPoints(), i = 1; i < r.length; i++)
                o.push(r[i].subtract(r[0]).add(n))
              return new t(o)
            }),
            (t.prototype._computeLength = function(t) {
              for (var e = 0, n = 1; n < t.length; n++) e += t[n].subtract(t[n - 1]).length()
              return e
            }),
            t
          )
        })()
      e.Curve3 = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Frustum = void 0)
      var o = n(25),
        r = (function() {
          function t() {}
          return (
            (t.GetPlanes = function(e) {
              for (var n = [], r = 0; r < 6; r++) n.push(new o.Plane(0, 0, 0, 0))
              return t.GetPlanesToRef(e, n), n
            }),
            (t.GetNearPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] + n[2]), (e.normal.y = n[7] + n[6]), (e.normal.z = n[11] + n[10]), (e.d = n[15] + n[14]), e.normalize()
            }),
            (t.GetFarPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] - n[2]), (e.normal.y = n[7] - n[6]), (e.normal.z = n[11] - n[10]), (e.d = n[15] - n[14]), e.normalize()
            }),
            (t.GetLeftPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] + n[0]), (e.normal.y = n[7] + n[4]), (e.normal.z = n[11] + n[8]), (e.d = n[15] + n[12]), e.normalize()
            }),
            (t.GetRightPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] - n[0]), (e.normal.y = n[7] - n[4]), (e.normal.z = n[11] - n[8]), (e.d = n[15] - n[12]), e.normalize()
            }),
            (t.GetTopPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] - n[1]), (e.normal.y = n[7] - n[5]), (e.normal.z = n[11] - n[9]), (e.d = n[15] - n[13]), e.normalize()
            }),
            (t.GetBottomPlaneToRef = function(t, e) {
              var n = t.m
              ;(e.normal.x = n[3] + n[1]), (e.normal.y = n[7] + n[5]), (e.normal.z = n[11] + n[9]), (e.d = n[15] + n[13]), e.normalize()
            }),
            (t.GetPlanesToRef = function(e, n) {
              t.GetNearPlaneToRef(e, n[0]),
                t.GetFarPlaneToRef(e, n[1]),
                t.GetLeftPlaneToRef(e, n[2]),
                t.GetRightPlaneToRef(e, n[3]),
                t.GetTopPlaneToRef(e, n[4]),
                t.GetBottomPlaneToRef(e, n[5])
            }),
            t
          )
        })()
      e.Frustum = r
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Path2 = void 0)
      var o = n(15),
        r = n(23),
        i = n(2),
        s = (function() {
          function t(t, e) {
            ;(this.closed = !1), (this._points = new Array()), (this._length = 0), this._points.push(new o.Vector2(t, e))
          }
          return (
            (t.StartingAt = function(e, n) {
              return new t(e, n)
            }),
            (t.prototype.addLineTo = function(t, e) {
              if (this.closed) return this
              var n = new o.Vector2(t, e),
                r = this._points[this._points.length - 1]
              return this._points.push(n), (this._length += n.subtract(r).length()), this
            }),
            (t.prototype.addArcTo = function(t, e, n, s, a) {
              if ((void 0 === a && (a = 36), this.closed)) return this
              var p = this._points[this._points.length - 1],
                u = new o.Vector2(t, e),
                l = new o.Vector2(n, s),
                c = new r.Arc2(p, u, l),
                h = c.angle.radians() / a
              c.orientation === i.Orientation.CW && (h *= -1)
              for (var d = c.startAngle.radians() + h, f = 0; f < a; f++) {
                var y = Math.cos(d) * c.radius + c.centerPoint.x,
                  v = Math.sin(d) * c.radius + c.centerPoint.y
                this.addLineTo(y, v), (d += h)
              }
              return this
            }),
            (t.prototype.close = function() {
              return (this.closed = !0), this
            }),
            (t.prototype.length = function() {
              var t = this._length
              if (!this.closed) {
                var e = this._points[this._points.length - 1]
                t += this._points[0].subtract(e).length()
              }
              return t
            }),
            (t.prototype.getPoints = function() {
              return this._points
            }),
            (t.prototype.getPointAtLengthPosition = function(t) {
              if (t < 0 || t > 1) return o.Vector2.Zero()
              for (var e = t * this.length(), n = 0, r = 0; r < this._points.length; r++) {
                var i = (r + 1) % this._points.length,
                  s = this._points[r],
                  a = this._points[i].subtract(s),
                  p = a.length() + n
                if (e >= n && e <= p) {
                  var u = a.normalize(),
                    l = e - n
                  return new o.Vector2(s.x + u.x * l, s.y + u.y * l)
                }
                n = p
              }
              return o.Vector2.Zero()
            }),
            t
          )
        })()
      e.Path2 = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Path3D = void 0)
      var o = n(3),
        r = n(2),
        i = n(6),
        s = (function() {
          function t(t, e, n) {
            void 0 === e && (e = null),
              (this.path = t),
              (this._curve = new Array()),
              (this._distances = new Array()),
              (this._tangents = new Array()),
              (this._normals = new Array()),
              (this._binormals = new Array())
            for (var o = 0; o < t.length; o++) this._curve[o] = t[o].clone()
            ;(this._raw = n || !1), this._compute(e)
          }
          return (
            (t.prototype.getCurve = function() {
              return this._curve
            }),
            (t.prototype.getTangents = function() {
              return this._tangents
            }),
            (t.prototype.getNormals = function() {
              return this._normals
            }),
            (t.prototype.getBinormals = function() {
              return this._binormals
            }),
            (t.prototype.getDistances = function() {
              return this._distances
            }),
            (t.prototype.update = function(t, e) {
              void 0 === e && (e = null)
              for (var n = 0; n < t.length; n++) (this._curve[n].x = t[n].x), (this._curve[n].y = t[n].y), (this._curve[n].z = t[n].z)
              return this._compute(e), this
            }),
            (t.prototype._compute = function(t) {
              var e = this._curve.length
              ;(this._tangents[0] = this._getFirstNonNullVector(0)),
                this._raw || this._tangents[0].normalize(),
                (this._tangents[e - 1] = this._curve[e - 1].subtract(this._curve[e - 2])),
                this._raw || this._tangents[e - 1].normalize()
              var n,
                r,
                i,
                s,
                a = this._tangents[0],
                p = this._normalVector(this._curve[0], a, t)
              ;(this._normals[0] = p),
                this._raw || this._normals[0].normalize(),
                (this._binormals[0] = o.Vector3.Cross(a, this._normals[0])),
                this._raw || this._binormals[0].normalize(),
                (this._distances[0] = 0)
              for (var u = 1; u < e; u++)
                (n = this._getLastNonNullVector(u)),
                  u < e - 1 && ((r = this._getFirstNonNullVector(u)), (this._tangents[u] = n.add(r)), this._tangents[u].normalize()),
                  (this._distances[u] = this._distances[u - 1] + n.length()),
                  (i = this._tangents[u]),
                  (s = this._binormals[u - 1]),
                  (this._normals[u] = o.Vector3.Cross(s, i)),
                  this._raw || this._normals[u].normalize(),
                  (this._binormals[u] = o.Vector3.Cross(i, this._normals[u])),
                  this._raw || this._binormals[u].normalize()
            }),
            (t.prototype._getFirstNonNullVector = function(t) {
              for (var e = 1, n = this._curve[t + e].subtract(this._curve[t]); 0 === n.length() && t + e + 1 < this._curve.length; )
                e++, (n = this._curve[t + e].subtract(this._curve[t]))
              return n
            }),
            (t.prototype._getLastNonNullVector = function(t) {
              for (var e = 1, n = this._curve[t].subtract(this._curve[t - e]); 0 === n.length() && t > e + 1; )
                e++, (n = this._curve[t].subtract(this._curve[t - e]))
              return n
            }),
            (t.prototype._normalVector = function(t, e, n) {
              var s,
                a = e.length()
              if ((0 === a && (a = 1), null == n)) {
                var p = void 0
                ;(p = i.Scalar.WithinEpsilon(Math.abs(e.y) / a, 1, r.Epsilon)
                  ? i.Scalar.WithinEpsilon(Math.abs(e.x) / a, 1, r.Epsilon)
                    ? i.Scalar.WithinEpsilon(Math.abs(e.z) / a, 1, r.Epsilon)
                      ? o.Vector3.Zero()
                      : new o.Vector3(0, 0, 1)
                    : new o.Vector3(1, 0, 0)
                  : new o.Vector3(0, -1, 0)),
                  (s = o.Vector3.Cross(e, p))
              } else (s = o.Vector3.Cross(e, n)), o.Vector3.CrossToRef(s, e, s)
              return s.normalize(), s
            }),
            t
          )
        })()
      e.Path3D = s
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Size = void 0)
      var o = (function() {
        function t(t, e) {
          ;(this.width = t), (this.height = e)
        }
        return (
          Object.defineProperty(t.prototype, 'surface', {
            get: function() {
              return this.width * this.height
            },
            enumerable: !1,
            configurable: !0
          }),
          (t.Zero = function() {
            return new t(0, 0)
          }),
          (t.Lerp = function(e, n, o) {
            return new t(e.width + (n.width - e.width) * o, e.height + (n.height - e.height) * o)
          }),
          (t.prototype.toString = function() {
            return '{W: ' + this.width + ', H: ' + this.height + '}'
          }),
          (t.prototype.getClassName = function() {
            return 'Size'
          }),
          (t.prototype.getHashCode = function() {
            var t = this.width || 0
            return (t = (397 * t) ^ (this.height || 0))
          }),
          (t.prototype.copyFrom = function(t) {
            ;(this.width = t.width), (this.height = t.height)
          }),
          (t.prototype.copyFromFloats = function(t, e) {
            return (this.width = t), (this.height = e), this
          }),
          (t.prototype.set = function(t, e) {
            return this.copyFromFloats(t, e)
          }),
          (t.prototype.multiplyByFloats = function(e, n) {
            return new t(this.width * e, this.height * n)
          }),
          (t.prototype.clone = function() {
            return new t(this.width, this.height)
          }),
          (t.prototype.equals = function(t) {
            return !!t && this.width === t.width && this.height === t.height
          }),
          (t.prototype.add = function(e) {
            return new t(this.width + e.width, this.height + e.height)
          }),
          (t.prototype.subtract = function(e) {
            return new t(this.width - e.width, this.height - e.height)
          }),
          t
        )
      })()
      e.Size = o
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.AudioStream = e.AudioSource = e.AudioClip = void 0)
      var s = n(0),
        a = n(4),
        p = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (n.loop = !1), (n.volume = 1), (n.url = e), n
          }
          return (
            r(e, t),
            i([s.ObservableComponent.readonly], e.prototype, 'url', void 0),
            i([s.ObservableComponent.field], e.prototype, 'loop', void 0),
            i([s.ObservableComponent.field], e.prototype, 'loadingCompleteEventId', void 0),
            i([s.ObservableComponent.field], e.prototype, 'volume', void 0),
            (e = i([s.DisposableComponent('engine.AudioClip', a.CLASS_ID.AUDIO_CLIP)], e))
          )
        })(s.ObservableComponent)
      e.AudioClip = p
      var u = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          if (((n.audioClip = e), (n.loop = !1), (n.volume = 1), (n.playing = !1), (n.pitch = 1), !(e instanceof p)))
            throw new Error('Trying to create AudioSource(AudioClip) with an invalid AudioClip')
          return (n.audioClipId = s.getComponentId(e)), n
        }
        return (
          r(e, t),
          (e.prototype.playOnce = function() {
            return (this.playing = !0), (this.dirty = !0), (this.data.nonce = Math.random()), this
          }),
          i([s.ObservableComponent.readonly], e.prototype, 'audioClipId', void 0),
          i([s.ObservableComponent.field], e.prototype, 'loop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'volume', void 0),
          i([s.ObservableComponent.field], e.prototype, 'playing', void 0),
          i([s.ObservableComponent.field], e.prototype, 'pitch', void 0),
          (e = i([s.Component('engine.AudioSource', a.CLASS_ID.AUDIO_SOURCE)], e))
        )
      })(s.ObservableComponent)
      e.AudioSource = u
      var l = (function(t) {
        function e(e) {
          var n = t.call(this) || this
          return (n.playing = !1), (n.volume = 1), (n.url = e), (n.playing = !0), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'url', void 0),
          i([s.ObservableComponent.field], e.prototype, 'playing', void 0),
          i([s.ObservableComponent.field], e.prototype, 'volume', void 0),
          (e = i([s.Component('engine.AudioStream', a.CLASS_ID.AUDIO_STREAM)], e))
        )
      })(s.ObservableComponent)
      e.AudioStream = l
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Gizmos = e.OnGizmoEvent = e.Gizmo = void 0)
      var s = n(0),
        a = n(4)
      !(function(t) {
        ;(t.MOVE = 'MOVE'), (t.ROTATE = 'ROTATE'), (t.SCALE = 'SCALE'), (t.NONE = 'NONE')
      })(e.Gizmo || (e.Gizmo = {}))
      var p = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.type = 'gizmoEvent'), e
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.gizmoEvent', a.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(a.OnUUIDEvent)
      e.OnGizmoEvent = p
      var u = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (e.position = !0), (e.rotation = !0), (e.scale = !0), (e.cycle = !0), (e.localReference = !1), e
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'position', void 0),
          i([s.ObservableComponent.field], e.prototype, 'rotation', void 0),
          i([s.ObservableComponent.field], e.prototype, 'scale', void 0),
          i([s.ObservableComponent.field], e.prototype, 'cycle', void 0),
          i([s.ObservableComponent.field], e.prototype, 'selectedGizmo', void 0),
          i([s.ObservableComponent.field], e.prototype, 'localReference', void 0),
          (e = i([s.Component('engine.gizmos', a.CLASS_ID.GIZMOS)], e))
        )
      })(s.ObservableComponent)
      e.Gizmos = u
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.UIScrollRect = e.UIImage = e.UIInputText = e.UIText = e.UIButton = e.UIContainerStack = e.UIStackOrientation = e.UIContainerRect = e.UICanvas = e.UIWorldSpace = e.UIFullScreen = e.UIShape = void 0)
      var s = n(0),
        a = n(4),
        p = n(5),
        u = (function(t) {
          function e(e) {
            var n = t.call(this) || this
            return (
              (n.name = null),
              (n.visible = !0),
              (n.opacity = 1),
              (n.hAlign = 'center'),
              (n.vAlign = 'center'),
              (n.width = '100px'),
              (n.height = '50px'),
              (n.positionX = '0px'),
              (n.positionY = '0px'),
              (n.isPointerBlocker = !0),
              e && ((n._parent = e), (n.data.parentComponent = s.getComponentId(e))),
              n
            )
          }
          return (
            r(e, t),
            Object.defineProperty(e.prototype, 'parent', {
              get: function() {
                return this._parent
              },
              enumerable: !1,
              configurable: !0
            }),
            Object.defineProperty(e.prototype, 'parentComponent', {
              get: function() {
                return this.data.parentComponent
              },
              enumerable: !1,
              configurable: !0
            }),
            i([s.ObservableComponent.field], e.prototype, 'name', void 0),
            i([s.ObservableComponent.field], e.prototype, 'visible', void 0),
            i([s.ObservableComponent.field], e.prototype, 'opacity', void 0),
            i([s.ObservableComponent.field], e.prototype, 'hAlign', void 0),
            i([s.ObservableComponent.field], e.prototype, 'vAlign', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'width', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'height', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'positionX', void 0),
            i([s.ObservableComponent.uiValue], e.prototype, 'positionY', void 0),
            i([s.ObservableComponent.field], e.prototype, 'isPointerBlocker', void 0),
            e
          )
        })(s.ObservableComponent)
      e.UIShape = u
      var l = (function(t) {
        function e() {
          return t.call(this, null) || this
        }
        return r(e, t), (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_FULLSCREEN_SHAPE)], e))
      })(u)
      e.UIFullScreen = l
      var c = (function(t) {
        function e() {
          return t.call(this, null) || this
        }
        return r(e, t), (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_WORLD_SPACE_SHAPE)], e))
      })(u)
      e.UIWorldSpace = c
      var h = (function(t) {
        function e() {
          return t.call(this, null) || this
        }
        return r(e, t), (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_SCREEN_SPACE_SHAPE)], e))
      })(u)
      e.UICanvas = h
      var d,
        f = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this
            return (e.adaptWidth = !1), (e.adaptHeight = !1), (e.thickness = 0), (e.color = p.Color4.Clear()), (e.alignmentUsesSize = !0), e
          }
          return (
            r(e, t),
            i([s.ObservableComponent.field], e.prototype, 'adaptWidth', void 0),
            i([s.ObservableComponent.field], e.prototype, 'adaptHeight', void 0),
            i([s.ObservableComponent.field], e.prototype, 'thickness', void 0),
            i([s.ObservableComponent.field], e.prototype, 'color', void 0),
            i([s.ObservableComponent.field], e.prototype, 'alignmentUsesSize', void 0),
            (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_CONTAINER_RECT)], e))
          )
        })(u)
      ;(e.UIContainerRect = f),
        (function(t) {
          ;(t[(t.VERTICAL = 0)] = 'VERTICAL'), (t[(t.HORIZONTAL = 1)] = 'HORIZONTAL')
        })((d = e.UIStackOrientation || (e.UIStackOrientation = {})))
      var y = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.adaptWidth = !0), (e.adaptHeight = !0), (e.color = p.Color4.Clear()), (e.stackOrientation = d.VERTICAL), (e.spacing = 0), e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'adaptWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'adaptHeight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'stackOrientation', void 0),
          i([s.ObservableComponent.field], e.prototype, 'spacing', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_CONTAINER_STACK)], e))
        )
      })(u)
      e.UIContainerStack = y
      var v = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.fontSize = 10),
            (e.fontWeight = 'normal'),
            (e.thickness = 0),
            (e.cornerRadius = 0),
            (e.color = p.Color4.White()),
            (e.background = p.Color4.White()),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            (e.shadowBlur = 0),
            (e.shadowOffsetX = 0),
            (e.shadowOffsetY = 0),
            (e.shadowColor = p.Color4.Black()),
            (e.text = 'button'),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'fontSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'thickness', void 0),
          i([s.ObservableComponent.field], e.prototype, 'cornerRadius', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'background', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'text', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_BUTTON_SHAPE)], e))
        )
      })(u)
      e.UIButton = v
      var m = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.outlineWidth = 0),
            (e.outlineColor = p.Color4.White()),
            (e.color = p.Color4.White()),
            (e.fontSize = 10),
            (e.fontAutoSize = !1),
            (e.fontWeight = 'normal'),
            (e.value = ''),
            (e.lineSpacing = 0),
            (e.lineCount = 0),
            (e.adaptWidth = !1),
            (e.adaptHeight = !1),
            (e.textWrapping = !1),
            (e.shadowBlur = 0),
            (e.shadowOffsetX = 0),
            (e.shadowOffsetY = 0),
            (e.shadowColor = p.Color4.Black()),
            (e.hTextAlign = 'left'),
            (e.vTextAlign = 'bottom'),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'outlineWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'outlineColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontAutoSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
          i([s.ObservableComponent.component], e.prototype, 'font', void 0),
          i([s.ObservableComponent.field], e.prototype, 'value', void 0),
          i([s.ObservableComponent.field], e.prototype, 'lineSpacing', void 0),
          i([s.ObservableComponent.field], e.prototype, 'lineCount', void 0),
          i([s.ObservableComponent.field], e.prototype, 'adaptWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'adaptHeight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'textWrapping', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'hTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'vTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_TEXT_SHAPE)], e))
        )
      })(u)
      e.UIText = m
      var b = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.outlineWidth = 0),
            (e.outlineColor = p.Color4.Black()),
            (e.color = p.Color4.Clear()),
            (e.thickness = 1),
            (e.fontSize = 10),
            (e.fontWeight = 'normal'),
            (e.value = ''),
            (e.placeholderColor = p.Color4.White()),
            (e.placeholder = ''),
            (e.margin = 10),
            (e.maxWidth = 100),
            (e.hTextAlign = 'left'),
            (e.vTextAlign = 'bottom'),
            (e.autoStretchWidth = !0),
            (e.background = p.Color4.Black()),
            (e.focusedBackground = p.Color4.Black()),
            (e.textWrapping = !1),
            (e.shadowBlur = 0),
            (e.shadowOffsetX = 0),
            (e.shadowOffsetY = 0),
            (e.shadowColor = p.Color4.White()),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            (e.onTextSubmit = null),
            (e.onChanged = null),
            (e.onFocus = null),
            (e.onBlur = null),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'outlineWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'outlineColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'color', void 0),
          i([s.ObservableComponent.field], e.prototype, 'thickness', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontSize', void 0),
          i([s.ObservableComponent.field], e.prototype, 'fontWeight', void 0),
          i([s.ObservableComponent.component], e.prototype, 'font', void 0),
          i([s.ObservableComponent.field], e.prototype, 'value', void 0),
          i([s.ObservableComponent.field], e.prototype, 'placeholderColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'placeholder', void 0),
          i([s.ObservableComponent.field], e.prototype, 'margin', void 0),
          i([s.ObservableComponent.field], e.prototype, 'maxWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'hTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'vTextAlign', void 0),
          i([s.ObservableComponent.field], e.prototype, 'autoStretchWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'background', void 0),
          i([s.ObservableComponent.field], e.prototype, 'focusedBackground', void 0),
          i([s.ObservableComponent.field], e.prototype, 'textWrapping', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowBlur', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowOffsetY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'shadowColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onTextSubmit', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onChanged', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onFocus', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onBlur', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_INPUT_TEXT_SHAPE)], e))
        )
      })(u)
      e.UIInputText = b
      var g = (function(t) {
        function e(e, n) {
          var o = t.call(this, e) || this
          return (
            (o.sourceLeft = 0),
            (o.sourceTop = 0),
            (o.sourceWidth = 1),
            (o.sourceHeight = 1),
            (o.paddingTop = 0),
            (o.paddingRight = 0),
            (o.paddingBottom = 0),
            (o.paddingLeft = 0),
            (o.sizeInPixels = !0),
            (o.onClick = null),
            (o.source = n),
            o
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'sourceLeft', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sourceTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sourceWidth', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sourceHeight', void 0),
          i([s.ObservableComponent.component], e.prototype, 'source', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([s.ObservableComponent.field], e.prototype, 'sizeInPixels', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onClick', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_IMAGE_SHAPE)], e))
        )
      })(u)
      e.UIImage = g
      var _ = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this
          return (
            (e.valueX = 0),
            (e.valueY = 0),
            (e.borderColor = p.Color4.White()),
            (e.backgroundColor = p.Color4.Clear()),
            (e.isHorizontal = !1),
            (e.isVertical = !1),
            (e.paddingTop = 0),
            (e.paddingRight = 0),
            (e.paddingBottom = 0),
            (e.paddingLeft = 0),
            (e.onChanged = null),
            e
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.field], e.prototype, 'valueX', void 0),
          i([s.ObservableComponent.field], e.prototype, 'valueY', void 0),
          i([s.ObservableComponent.field], e.prototype, 'borderColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'backgroundColor', void 0),
          i([s.ObservableComponent.field], e.prototype, 'isHorizontal', void 0),
          i([s.ObservableComponent.field], e.prototype, 'isVertical', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingTop', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingRight', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingBottom', void 0),
          i([s.ObservableComponent.field], e.prototype, 'paddingLeft', void 0),
          i([a.OnUUIDEvent.uuidEvent], e.prototype, 'onChanged', void 0),
          (e = i([s.DisposableComponent('engine.shape', a.CLASS_ID.UI_SLIDER_SHAPE)], e))
        )
      })(u)
      e.UIScrollRect = _
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.AvatarShape = void 0)
      var s = n(0),
        a = n(4),
        p = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this
            return (e.useDummyModel = !1), (e.talking = !1), e
          }
          var n
          return (
            r(e, t),
            (n = e),
            (e.Dummy = function() {
              var t = new n()
              return (t.useDummyModel = !0), t
            }),
            i([s.ObservableComponent.field], e.prototype, 'id', void 0),
            i([s.ObservableComponent.field], e.prototype, 'name', void 0),
            i([s.ObservableComponent.field], e.prototype, 'expressionTriggerId', void 0),
            i([s.ObservableComponent.field], e.prototype, 'expressionTriggerTimestamp', void 0),
            i([s.ObservableComponent.field], e.prototype, 'bodyShape', void 0),
            i([s.ObservableComponent.field], e.prototype, 'wearables', void 0),
            i([s.ObservableComponent.field], e.prototype, 'skinColor', void 0),
            i([s.ObservableComponent.field], e.prototype, 'hairColor', void 0),
            i([s.ObservableComponent.field], e.prototype, 'eyeColor', void 0),
            i([s.ObservableComponent.field], e.prototype, 'useDummyModel', void 0),
            i([s.ObservableComponent.field], e.prototype, 'talking', void 0),
            (e = n = i([s.Component('engine.avatarShape', a.CLASS_ID.AVATAR_SHAPE)], e))
          )
        })(s.ObservableComponent)
      e.AvatarShape = p
    },
    function(t, e, n) {
      'use strict'
      var o,
        r =
          (this && this.__extends) ||
          ((o = function(t, e) {
            return (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                  t.__proto__ = e
                }) ||
              function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
              })(t, e)
          }),
          function(t, e) {
            function n() {
              this.constructor = t
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
          }),
        i =
          (this && this.__decorate) ||
          function(t, e, n, o) {
            var r,
              i = arguments.length,
              s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o
            if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o)
            else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s)
            return i > 3 && s && Object.defineProperty(e, n, s), s
          }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.OnPointerUp = e.OnPointerDown = e.OnClick = e.OnChanged = e.OnEnter = e.OnBlur = e.OnTextSubmit = e.OnFocus = void 0)
      var s = n(0),
        a = n(14),
        p = n(4),
        u = (function(t) {
          function e(e) {
            var n = t.call(this, e) || this
            return (n.type = 'onFocus'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
          }
          return (
            r(e, t),
            i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
            (e = i([s.Component('engine.onFocus', p.CLASS_ID.UUID_CALLBACK)], e))
          )
        })(p.OnUUIDEvent)
      e.OnFocus = u
      var l = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onTextSubmit'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onTextSubmit', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnTextSubmit = l
      var c = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onBlur'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onBlur', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnBlur = c
      var h = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onEnter'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onEnter', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnEnter = h
      var d = (function(t) {
        function e(e) {
          var n = t.call(this, e) || this
          return (n.type = 'onChange'), (a.uuidEventSystem.handlerMap[n.uuid] = n), n
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onChange', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnUUIDEvent)
      e.OnChanged = d
      var f = (function(t) {
        function e(e, n) {
          var o = t.call(this, e) || this
          return (
            (o.type = 'onClick'),
            (a.uuidEventSystem.handlerMap[o.uuid] = o),
            n &&
              ((o.showFeedback = !(!1 === n.showFeedback)),
              n.button && (o.button = n.button),
              n.hoverText && (o.hoverText = n.hoverText),
              n.distance && (o.distance = n.distance)),
            o
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.onClick', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnPointerUUIDEvent)
      e.OnClick = f
      var y = (function(t) {
        function e(e, n) {
          var o = t.call(this, e) || this
          return (
            (o.type = 'pointerDown'),
            (a.uuidEventSystem.handlerMap[o.uuid] = o),
            n &&
              ((o.showFeedback = !(!1 === n.showFeedback)),
              n.button && (o.button = n.button),
              n.hoverText && (o.hoverText = n.hoverText),
              n.distance && (o.distance = n.distance)),
            o
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.pointerDown', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnPointerUUIDEvent)
      e.OnPointerDown = y
      var v = (function(t) {
        function e(e, n) {
          var o = t.call(this, e) || this
          return (
            (o.type = 'pointerUp'),
            (a.uuidEventSystem.handlerMap[o.uuid] = o),
            n &&
              ((o.showFeedback = !(!1 === n.showFeedback)),
              n.button && (o.button = n.button),
              n.hoverText && (o.hoverText = n.hoverText),
              n.distance && (o.distance = n.distance)),
            o
          )
        }
        return (
          r(e, t),
          i([s.ObservableComponent.readonly], e.prototype, 'type', void 0),
          (e = i([s.Component('engine.pointerUp', p.CLASS_ID.UUID_CALLBACK)], e))
        )
      })(p.OnPointerUUIDEvent)
      e.OnPointerUp = v
    },
    function(t, e, n) {
      'use strict'
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.MessageBus = e.getMessageObserver = void 0)
      var o = n(20),
        r = n(1),
        i = null,
        s = null,
        a = null
      function p() {
        return a || (a = new o.Observable()), a
      }
      e.getMessageObserver = p
      var u = (function() {
        function t() {
          var t = this
          ;(this.messageQueue = []),
            (this.connected = !1),
            (this.flushing = !1),
            (function() {
              if (!s) {
                ;(s = dcl.loadModule('@decentraland/CommunicationsController')).then(function(t) {
                  i = t
                })
                var t = p()
                dcl.subscribe('comms'),
                  dcl.onEvent(function(e) {
                    'comms' === e.type && t.notifyObservers(e.data)
                  })
              }
              return s
            })().then(function(e) {
              ;(t.connected = !0), t.flush()
            })
        }
        return (
          (t.prototype.on = function(t, e) {
            return p().add(function(n) {
              try {
                var o = JSON.parse(n.message)
                o.message === t && e(o.payload, n.sender)
              } catch (n) {
                dcl.error('Error parsing comms message ' + n.message, n)
              }
            })
          }),
          (t.prototype.sendRaw = function(t) {
            this.messageQueue.push(t), this.connected && this.flush()
          }),
          (t.prototype.emit = function(t, e) {
            var n = JSON.stringify({ message: t, payload: e })
            this.sendRaw(n), p().notifyObservers({ message: n, sender: 'self' })
          }),
          (t.prototype.flush = function() {
            var t = this
            if (0 !== this.messageQueue.length && this.connected && i && !this.flushing) {
              var e = this.messageQueue.shift()
              ;(this.flushing = !0),
                dcl.callRpc(i.rpcHandle, 'send', [e]).then(
                  function(e) {
                    ;(t.flushing = !1), t.flush()
                  },
                  function(e) {
                    ;(t.flushing = !1), r.error('Error flushing MessageBus', e)
                  }
                )
            }
          }),
          t
        )
      })()
      e.MessageBus = u
    }
  ])
)

// AMD
"use strict";const getGlobalThis=function(){if(typeof globalThis!=="undefined")return globalThis;if(typeof self!=="undefined")return self;if(typeof window!=="undefined")return window;if(typeof this!=="undefined")return this;throw new Error("Unable to locate global `this`")};const globalObject=getGlobalThis();var loader;(function(e){"use strict";const n=1;const t=2;let r=0;let o=[];let l=[];const i={baseUrl:""};const s={};function f(e){if(typeof e==="object"){for(let n in e){if(e.hasOwnProperty(n)){i[n]=e[n]}}}}e.config=f;function d(e,t,o){let l=null;let i={};let f=null;if(typeof e==="function"){i=e}else if(typeof e==="string"){l=e;if(typeof t==="function"){i=t}else if(t instanceof Array){f=t;i=o}}else if(e instanceof Array){f=e;if(typeof t==="function"){i=t}}f=f||["require","exports","module"];if(l===null){l=`unnamed-module-${r++}`}l=g(l);function d(e){const n=s[l];if(!n)throw new Error("Could not access registered module "+l);let t=n.exports;t=typeof i==="function"?i.apply(globalObject,e)||t:i;n.exports=t;u(l)}f=(f||[]).map((e=>m(l,e)));if(!s[l]){s[l]={name:l,parent:null,dclamd:n,dependencies:f,handlers:[],exports:{},dependants:new Set}}s[l].dependencies=f;p(f,d,(e=>{if(typeof onerror=="function"){onerror(e)}else{throw e}}),l)}e.define=d;(function(e){e.amd={};e.modules=s})(d=e.define||(e.define={}));function u(e){const n=s[e];if(!n)throw new Error("Could not access registered module "+e);n.dclamd=t;let r=n.handlers;if(r&&r.length){for(let n=0;n<r.length;n++){r[n](s[e])}}}function c(e,n,t){if(!s[e]){return null}if(e==n||t==50)return[e];const r=s[e].dependencies;for(let o=0,l=r.length;o<l;o++){let l=c(r[o],n,t+1);if(l!==null){l.push(e);return l}}return null}function a(e,n){let t=s[e];if(!t){return false}let r={};for(let e in s){r[e]=false}let o=[];o.push(t);r[e]=true;while(o.length>0){let e=o.shift();let t=e.dependencies;if(t){for(let e=0,l=t.length;e<l;e++){let l=t[e];if(l===n){return true}let i=s[l];if(i&&!r[l]){r[l]=true;o.push(i)}}}}return false}function p(e,t,r,o){let i=new Array(e.length).fill(null);let f=0;let d=false;if(typeof e==="string"){if(s[e]){if(s[e].dclamd===n){throw new Error(`Trying to load ${e} from ${o}. The first module is still loading.`)}return s[e]}throw new Error(e+" has not been defined. Please include it as a dependency in "+o+"'s define()")}const u=e.length;for(let n=0;n<u;n++){switch(e[n]){case"require":let h=function(e,n,t){return p(e,n,t,o)};h.toUrl=function(e){return b(e,o)};i[n]=h;f++;break;case"exports":if(!s[o]){throw new Error("Parent module "+o+" not registered yet")}i[n]=s[o].exports;f++;break;case"module":i[n]={id:o,uri:b(o)};f++;break;default:{const p=e[n];const h=a(p,o);const m=()=>{i[n]=s[p].exports;f++;if(f===u&&t){d=true;t(i)}};if(h){const e=c(p,o,0);if(e){e.reverse();e.push(p);l.push(e)}w(p,(()=>{}),r,o);m()}else{w(p,m,r,o)}break}}}if(!d&&f===u&&t){t(i)}}e.require=p;function h(e,n){return function(){return dcl.callRpc(e,n.name,o.slice.call(arguments,0))}}function m(e,n){return e?b(n,e):n}function w(e,t,r,o){if(s[e]){s[e].dependants.add(o);if(s[e].dclamd===n){t&&s[e].handlers.push(t)}else{t&&t(s[e])}return}else{s[e]={name:e,parent:o,dclamd:n,handlers:[t],dependencies:[],dependants:new Set([o]),exports:{}}}if(e.indexOf("@")===0){let n=s[e].exports;if(typeof dcl.loadModule==="function"){dcl.loadModule(e,n).then((t=>{for(let e in t.methods){const r=t.methods[e];n[r.name]=h(t.rpcHandle,r)}u(e)})).catch((e=>{r(e)}))}else{throw new Error("Asynchronous modules will not work because loadModule function is not present")}}}if(typeof dcl!=="undefined"){dcl.onStart((()=>{const e=new Set;const t=[];for(let r in s){if(s[r]){if(s[r].dclamd===n){t.push(s[r])}s[r].dependencies.forEach((n=>{if(n=="require"||n=="exports"||n=="module")return;if(!s[n])e.add(n)}))}}const r=[];if(l.length){r.push(`\n> Cyclic dependencies: ${l.map((e=>"\n  - "+e.join(" -> "))).join("")}`)}if(e.size){r.push(`\n> Undeclared/unknown modules: ${Array.from(e).map((e=>"\n  - "+e)).join("")}`)}if(t.length){r.push(`\n> These modules didn't load: ${t.map((e=>"\n  - "+e.name)).join("")}.\n`)}if(r.length){throw new Error(r.join("\n"))}}))}function g(e){let n=e,t;t=/\/\.\//;while(t.test(n)){n=n.replace(t,"/")}n=n.replace(/^\.\//g,"");t=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;while(t.test(n)){n=n.replace(t,"/")}n=n.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,"");n=n.replace(/^\//g,"");return n}function y(e,n){let t=e;if(!t.startsWith("@")){if(t.startsWith("./")||t.startsWith("../")){const e=n.split("/");e.pop();t=g(e.join("/")+"/"+t)}}return t}function b(e,n){switch(e){case"require":case"exports":case"module":return e}if(n){return y(e,n)}return g(e)}p.toUrl=b})(loader||(loader={}));globalObject.define=loader.define;globalObject.dclamd=loader;
// Builder generated code below
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script2 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script3 from "../83087d33-84d2-4135-af09-ab0fa357b59d/src/item"
import Script4 from "../8d62d5a3-411c-43f8-a438-574ccf3d0fbe/src/item"
import Script5 from "../396e4247-6acd-406c-9272-046c65d0436c/src/item"
import Script6 from "../58dc566a-2add-4326-b61c-0fdf46903195/src/item"
import Script7 from "../3cf05054-0a57-4b00-ba77-a3f21876494d/src/item"
import Script8 from "../846479b0-75d3-450d-bbd6-7e6b3355a7a2/src/item"
import Script9 from "../a3401af9-8e2b-4b2b-915e-ccb8ed611c88/src/item"
import Script10 from "../3bc461a1-e060-4e46-b80c-4b016678a7f9/src/item"
import Script11 from "../ad67f3a9-fa15-4e06-aced-a2a7716ebf85/src/item"
import Script12 from "../b79a150e-5914-4fdf-a6b4-c7ff0c6833dd/src/item"
import Script13 from "../b53e3bde-9d22-4098-8707-29a685d25a3b/src/item"
import Script14 from "../bcdcfbe4-bd95-4100-9174-b38785b45e2c/src/item"
import Script15 from "../1cd258df-9b80-4e75-8aaa-524fbc438295/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const redNeonTube6 = new Entity('redNeonTube6')
engine.addEntity(redNeonTube6)
redNeonTube6.setParent(_scene)
const gltfShape = new GLTFShape("6fd50cb1-fe66-4c14-a92d-22baec98639f/NeonLightTube_06/NeonLightTube_06.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
redNeonTube6.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(0.31430351734161377, 1.9566090106964111, 1.30887770652771),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.425239324569702, 1.0000050067901611, 1)
})
redNeonTube6.addComponentOrReplace(transform2)

const redNeonTube7 = new Entity('redNeonTube7')
engine.addEntity(redNeonTube7)
redNeonTube7.setParent(_scene)
redNeonTube7.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(15.864707946777344, 1.982234001159668, 8.206141471862793),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252383708953857, 1.000004529953003, 114.75346374511719)
})
redNeonTube7.addComponentOrReplace(transform3)

const redNeonTube10 = new Entity('redNeonTube10')
engine.addEntity(redNeonTube10)
redNeonTube10.setParent(_scene)
redNeonTube10.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(0.031082984060049057, 1.982234001159668, 8.037086486816406),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.425236940383911, 1.0000038146972656, 114.75346374511719)
})
redNeonTube10.addComponentOrReplace(transform4)

const redNeonTube13 = new Entity('redNeonTube13')
engine.addEntity(redNeonTube13)
redNeonTube13.setParent(_scene)
redNeonTube13.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(8.20470905303955, 1.982234001159668, 15.986844062805176),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.0000050067901611, 114.75357055664062)
})
redNeonTube13.addComponentOrReplace(transform5)

const redNeonTube14 = new Entity('redNeonTube14')
engine.addEntity(redNeonTube14)
redNeonTube14.setParent(_scene)
redNeonTube14.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(0, 6.092233657836914, 8.037086486816406),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252383708953857, 1.000004529953003, 114.75346374511719)
})
redNeonTube14.addComponentOrReplace(transform6)

const floorGlass = new Entity('floorGlass')
engine.addEntity(floorGlass)
floorGlass.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(15.997428894042969, 4.0051798820495605, 15.999792098999023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass.addComponentOrReplace(transform7)
const gltfShape2 = new GLTFShape("f4a4956e-f60a-4108-82c7-41b5ebda6549/GlassFloor.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
floorGlass.addComponentOrReplace(gltfShape2)

const floorGlass2 = new Entity('floorGlass2')
engine.addEntity(floorGlass2)
floorGlass2.setParent(_scene)
floorGlass2.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(15.997428894042969, 4.0051798820495605, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass2.addComponentOrReplace(transform8)

const floorGlass3 = new Entity('floorGlass3')
engine.addEntity(floorGlass3)
floorGlass3.setParent(_scene)
floorGlass3.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(15.997428894042969, 4.0051798820495605, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass3.addComponentOrReplace(transform9)

const floorGlass4 = new Entity('floorGlass4')
engine.addEntity(floorGlass4)
floorGlass4.setParent(_scene)
floorGlass4.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(15.997428894042969, 4.0051798820495605, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass4.addComponentOrReplace(transform10)

const floorGlass5 = new Entity('floorGlass5')
engine.addEntity(floorGlass5)
floorGlass5.setParent(_scene)
floorGlass5.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(11.996179580688477, 4.0051798820495605, 15.999792098999023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass5.addComponentOrReplace(transform11)

const floorGlass6 = new Entity('floorGlass6')
engine.addEntity(floorGlass6)
floorGlass6.setParent(_scene)
floorGlass6.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(11.996179580688477, 4.0051798820495605, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass6.addComponentOrReplace(transform12)

const floorGlass7 = new Entity('floorGlass7')
engine.addEntity(floorGlass7)
floorGlass7.setParent(_scene)
floorGlass7.addComponentOrReplace(gltfShape2)
const transform13 = new Transform({
  position: new Vector3(11.996179580688477, 4.0051798820495605, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass7.addComponentOrReplace(transform13)

const floorGlass8 = new Entity('floorGlass8')
engine.addEntity(floorGlass8)
floorGlass8.setParent(_scene)
floorGlass8.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(11.996179580688477, 4.0051798820495605, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass8.addComponentOrReplace(transform14)

const floorGlass9 = new Entity('floorGlass9')
engine.addEntity(floorGlass9)
floorGlass9.setParent(_scene)
floorGlass9.addComponentOrReplace(gltfShape2)
const transform15 = new Transform({
  position: new Vector3(8.007821083068848, 4.0051798820495605, 15.999792098999023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5089138746261597, 1, 1)
})
floorGlass9.addComponentOrReplace(transform15)

const floorGlass10 = new Entity('floorGlass10')
engine.addEntity(floorGlass10)
floorGlass10.setParent(_scene)
floorGlass10.addComponentOrReplace(gltfShape2)
const transform16 = new Transform({
  position: new Vector3(8.007821083068848, 4.0051798820495605, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass10.addComponentOrReplace(transform16)

const floorGlass11 = new Entity('floorGlass11')
engine.addEntity(floorGlass11)
floorGlass11.setParent(_scene)
floorGlass11.addComponentOrReplace(gltfShape2)
const transform17 = new Transform({
  position: new Vector3(8.007821083068848, 4.0051798820495605, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass11.addComponentOrReplace(transform17)

const floorGlass12 = new Entity('floorGlass12')
engine.addEntity(floorGlass12)
floorGlass12.setParent(_scene)
floorGlass12.addComponentOrReplace(gltfShape2)
const transform18 = new Transform({
  position: new Vector3(8.007821083068848, 4.0051798820495605, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass12.addComponentOrReplace(transform18)

const floorGlass14 = new Entity('floorGlass14')
engine.addEntity(floorGlass14)
floorGlass14.setParent(_scene)
floorGlass14.addComponentOrReplace(gltfShape2)
const transform19 = new Transform({
  position: new Vector3(3.999147415161133, 4.0051798820495605, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass14.addComponentOrReplace(transform19)

const floorGlass15 = new Entity('floorGlass15')
engine.addEntity(floorGlass15)
floorGlass15.setParent(_scene)
floorGlass15.addComponentOrReplace(gltfShape2)
const transform20 = new Transform({
  position: new Vector3(3.999147415161133, 4.0051798820495605, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass15.addComponentOrReplace(transform20)

const floorGlass16 = new Entity('floorGlass16')
engine.addEntity(floorGlass16)
floorGlass16.setParent(_scene)
floorGlass16.addComponentOrReplace(gltfShape2)
const transform21 = new Transform({
  position: new Vector3(3.999147415161133, 4.0051798820495605, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass16.addComponentOrReplace(transform21)

const floorGlass13 = new Entity('floorGlass13')
engine.addEntity(floorGlass13)
floorGlass13.setParent(_scene)
floorGlass13.addComponentOrReplace(gltfShape2)
const transform22 = new Transform({
  position: new Vector3(8.000624656677246, 7.925479412078857, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass13.addComponentOrReplace(transform22)

const floorGlass17 = new Entity('floorGlass17')
engine.addEntity(floorGlass17)
floorGlass17.setParent(_scene)
floorGlass17.addComponentOrReplace(gltfShape2)
const transform23 = new Transform({
  position: new Vector3(15.997428894042969, 7.925479412078857, 15.975967407226562),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1.9904712438583374)
})
floorGlass17.addComponentOrReplace(transform23)

const floorGlass18 = new Entity('floorGlass18')
engine.addEntity(floorGlass18)
floorGlass18.setParent(_scene)
floorGlass18.addComponentOrReplace(gltfShape2)
const transform24 = new Transform({
  position: new Vector3(15.997428894042969, 7.925479412078857, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass18.addComponentOrReplace(transform24)

const floorGlass19 = new Entity('floorGlass19')
engine.addEntity(floorGlass19)
floorGlass19.setParent(_scene)
floorGlass19.addComponentOrReplace(gltfShape2)
const transform25 = new Transform({
  position: new Vector3(15.997428894042969, 7.925479412078857, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass19.addComponentOrReplace(transform25)

const floorGlass20 = new Entity('floorGlass20')
engine.addEntity(floorGlass20)
floorGlass20.setParent(_scene)
floorGlass20.addComponentOrReplace(gltfShape2)
const transform26 = new Transform({
  position: new Vector3(11.996179580688477, 7.925479412078857, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass20.addComponentOrReplace(transform26)

const floorGlass21 = new Entity('floorGlass21')
engine.addEntity(floorGlass21)
floorGlass21.setParent(_scene)
floorGlass21.addComponentOrReplace(gltfShape2)
const transform27 = new Transform({
  position: new Vector3(11.996179580688477, 7.925479412078857, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass21.addComponentOrReplace(transform27)

const floorGlass22 = new Entity('floorGlass22')
engine.addEntity(floorGlass22)
floorGlass22.setParent(_scene)
floorGlass22.addComponentOrReplace(gltfShape2)
const transform28 = new Transform({
  position: new Vector3(11.996179580688477, 7.925479412078857, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass22.addComponentOrReplace(transform28)

const floorGlass23 = new Entity('floorGlass23')
engine.addEntity(floorGlass23)
floorGlass23.setParent(_scene)
floorGlass23.addComponentOrReplace(gltfShape2)
const transform29 = new Transform({
  position: new Vector3(3.999375343322754, 7.925479412078857, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.510823130607605, 1, 1)
})
floorGlass23.addComponentOrReplace(transform29)

const floorGlass25 = new Entity('floorGlass25')
engine.addEntity(floorGlass25)
floorGlass25.setParent(_scene)
floorGlass25.addComponentOrReplace(gltfShape2)
const transform30 = new Transform({
  position: new Vector3(8.007821083068848, 7.925479412078857, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass25.addComponentOrReplace(transform30)

const floorGlass26 = new Entity('floorGlass26')
engine.addEntity(floorGlass26)
floorGlass26.setParent(_scene)
floorGlass26.addComponentOrReplace(gltfShape2)
const transform31 = new Transform({
  position: new Vector3(8.007821083068848, 7.925479412078857, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass26.addComponentOrReplace(transform31)

const floorGlass27 = new Entity('floorGlass27')
engine.addEntity(floorGlass27)
floorGlass27.setParent(_scene)
floorGlass27.addComponentOrReplace(gltfShape2)
const transform32 = new Transform({
  position: new Vector3(8.007821083068848, 7.925479412078857, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass27.addComponentOrReplace(transform32)

const floorGlass28 = new Entity('floorGlass28')
engine.addEntity(floorGlass28)
floorGlass28.setParent(_scene)
floorGlass28.addComponentOrReplace(gltfShape2)
const transform33 = new Transform({
  position: new Vector3(3.999147415161133, 7.925479412078857, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass28.addComponentOrReplace(transform33)

const floorGlass29 = new Entity('floorGlass29')
engine.addEntity(floorGlass29)
floorGlass29.setParent(_scene)
floorGlass29.addComponentOrReplace(gltfShape2)
const transform34 = new Transform({
  position: new Vector3(3.999147415161133, 7.925479412078857, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass29.addComponentOrReplace(transform34)

const floorGlass30 = new Entity('floorGlass30')
engine.addEntity(floorGlass30)
floorGlass30.setParent(_scene)
floorGlass30.addComponentOrReplace(gltfShape2)
const transform35 = new Transform({
  position: new Vector3(3.999147415161133, 7.925479412078857, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass30.addComponentOrReplace(transform35)

const redNeonTube15 = new Entity('redNeonTube15')
engine.addEntity(redNeonTube15)
redNeonTube15.setParent(_scene)
redNeonTube15.addComponentOrReplace(gltfShape)
const transform36 = new Transform({
  position: new Vector3(8.20470905303955, 6.122361660003662, 15.98684310913086),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.2545740604400635, 1.0000054836273193, 114.75363159179688)
})
redNeonTube15.addComponentOrReplace(transform36)

const redNeonTube16 = new Entity('redNeonTube16')
engine.addEntity(redNeonTube16)
redNeonTube16.setParent(_scene)
redNeonTube16.addComponentOrReplace(gltfShape)
const transform37 = new Transform({
  position: new Vector3(15.84600830078125, 6.118805408477783, 7.958951950073242),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252402782440186, 1.0000054836273193, 114.75346374511719)
})
redNeonTube16.addComponentOrReplace(transform37)

const floorGlass24 = new Entity('floorGlass24')
engine.addEntity(floorGlass24)
floorGlass24.setParent(_scene)
floorGlass24.addComponentOrReplace(gltfShape2)
const transform38 = new Transform({
  position: new Vector3(11.992985725402832, 7.925479412078857, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass24.addComponentOrReplace(transform38)

const redNeonTube17 = new Entity('redNeonTube17')
engine.addEntity(redNeonTube17)
redNeonTube17.setParent(_scene)
redNeonTube17.addComponentOrReplace(gltfShape)
const transform39 = new Transform({
  position: new Vector3(15.864707946777344, 10.218280792236328, 8.206141471862793),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252407550811768, 1.0000057220458984, 114.75346374511719)
})
redNeonTube17.addComponentOrReplace(transform39)

const redNeonTube18 = new Entity('redNeonTube18')
engine.addEntity(redNeonTube18)
redNeonTube18.setParent(_scene)
redNeonTube18.addComponentOrReplace(gltfShape)
const transform40 = new Transform({
  position: new Vector3(8.20470905303955, 10.221837997436523, 15.986844062805176),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.0000056028366089, 114.75364685058594)
})
redNeonTube18.addComponentOrReplace(transform40)

const redNeonTube19 = new Entity('redNeonTube19')
engine.addEntity(redNeonTube19)
redNeonTube19.setParent(_scene)
redNeonTube19.addComponentOrReplace(gltfShape)
const transform41 = new Transform({
  position: new Vector3(0, 10.191709518432617, 8.037086486816406),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252398014068604, 1.0000052452087402, 114.75346374511719)
})
redNeonTube19.addComponentOrReplace(transform41)

const floorGlass31 = new Entity('floorGlass31')
engine.addEntity(floorGlass31)
floorGlass31.setParent(_scene)
floorGlass31.addComponentOrReplace(gltfShape2)
const transform42 = new Transform({
  position: new Vector3(15.997428894042969, 12.201950073242188, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass31.addComponentOrReplace(transform42)

const floorGlass32 = new Entity('floorGlass32')
engine.addEntity(floorGlass32)
floorGlass32.setParent(_scene)
floorGlass32.addComponentOrReplace(gltfShape2)
const transform43 = new Transform({
  position: new Vector3(15.997428894042969, 12.201950073242188, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass32.addComponentOrReplace(transform43)

const floorGlass33 = new Entity('floorGlass33')
engine.addEntity(floorGlass33)
floorGlass33.setParent(_scene)
floorGlass33.addComponentOrReplace(gltfShape2)
const transform44 = new Transform({
  position: new Vector3(15.997428894042969, 12.201950073242188, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass33.addComponentOrReplace(transform44)

const floorGlass34 = new Entity('floorGlass34')
engine.addEntity(floorGlass34)
floorGlass34.setParent(_scene)
floorGlass34.addComponentOrReplace(gltfShape2)
const transform45 = new Transform({
  position: new Vector3(15.997428894042969, 12.201950073242188, 15.999792098999023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass34.addComponentOrReplace(transform45)

const floorGlass35 = new Entity('floorGlass35')
engine.addEntity(floorGlass35)
floorGlass35.setParent(_scene)
floorGlass35.addComponentOrReplace(gltfShape2)
const transform46 = new Transform({
  position: new Vector3(11.996179580688477, 12.201950073242188, 15.999792098999023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass35.addComponentOrReplace(transform46)

const floorGlass36 = new Entity('floorGlass36')
engine.addEntity(floorGlass36)
floorGlass36.setParent(_scene)
floorGlass36.addComponentOrReplace(gltfShape2)
const transform47 = new Transform({
  position: new Vector3(11.996179580688477, 12.201950073242188, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass36.addComponentOrReplace(transform47)

const floorGlass37 = new Entity('floorGlass37')
engine.addEntity(floorGlass37)
floorGlass37.setParent(_scene)
floorGlass37.addComponentOrReplace(gltfShape2)
const transform48 = new Transform({
  position: new Vector3(11.996179580688477, 12.201950073242188, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass37.addComponentOrReplace(transform48)

const floorGlass38 = new Entity('floorGlass38')
engine.addEntity(floorGlass38)
floorGlass38.setParent(_scene)
floorGlass38.addComponentOrReplace(gltfShape2)
const transform49 = new Transform({
  position: new Vector3(11.996179580688477, 12.201950073242188, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass38.addComponentOrReplace(transform49)

const floorGlass39 = new Entity('floorGlass39')
engine.addEntity(floorGlass39)
floorGlass39.setParent(_scene)
floorGlass39.addComponentOrReplace(gltfShape2)
const transform50 = new Transform({
  position: new Vector3(8.007821083068848, 12.201950073242188, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass39.addComponentOrReplace(transform50)

const floorGlass40 = new Entity('floorGlass40')
engine.addEntity(floorGlass40)
floorGlass40.setParent(_scene)
floorGlass40.addComponentOrReplace(gltfShape2)
const transform51 = new Transform({
  position: new Vector3(8.007821083068848, 12.201950073242188, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass40.addComponentOrReplace(transform51)

const floorGlass41 = new Entity('floorGlass41')
engine.addEntity(floorGlass41)
floorGlass41.setParent(_scene)
floorGlass41.addComponentOrReplace(gltfShape2)
const transform52 = new Transform({
  position: new Vector3(8.007821083068848, 12.201950073242188, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass41.addComponentOrReplace(transform52)

const floorGlass42 = new Entity('floorGlass42')
engine.addEntity(floorGlass42)
floorGlass42.setParent(_scene)
floorGlass42.addComponentOrReplace(gltfShape2)
const transform53 = new Transform({
  position: new Vector3(8.007821083068848, 12.201950073242188, 15.999792098999023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5089138746261597, 1, 1)
})
floorGlass42.addComponentOrReplace(transform53)

const floorGlass43 = new Entity('floorGlass43')
engine.addEntity(floorGlass43)
floorGlass43.setParent(_scene)
floorGlass43.addComponentOrReplace(gltfShape2)
const transform54 = new Transform({
  position: new Vector3(3.999147415161133, 12.201950073242188, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass43.addComponentOrReplace(transform54)

const floorGlass44 = new Entity('floorGlass44')
engine.addEntity(floorGlass44)
floorGlass44.setParent(_scene)
floorGlass44.addComponentOrReplace(gltfShape2)
const transform55 = new Transform({
  position: new Vector3(3.999147415161133, 12.201950073242188, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass44.addComponentOrReplace(transform55)

const floorGlass45 = new Entity('floorGlass45')
engine.addEntity(floorGlass45)
floorGlass45.setParent(_scene)
floorGlass45.addComponentOrReplace(gltfShape2)
const transform56 = new Transform({
  position: new Vector3(3.999147415161133, 12.201950073242188, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass45.addComponentOrReplace(transform56)

const redNeonTube20 = new Entity('redNeonTube20')
engine.addEntity(redNeonTube20)
redNeonTube20.setParent(_scene)
redNeonTube20.addComponentOrReplace(gltfShape)
const transform57 = new Transform({
  position: new Vector3(15.864707946777344, 14.338839530944824, 8.206141471862793),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252421855926514, 1.0000064373016357, 114.75346374511719)
})
redNeonTube20.addComponentOrReplace(transform57)

const redNeonTube21 = new Entity('redNeonTube21')
engine.addEntity(redNeonTube21)
redNeonTube21.setParent(_scene)
redNeonTube21.addComponentOrReplace(gltfShape)
const transform58 = new Transform({
  position: new Vector3(8.20470905303955, 14.34239673614502, 15.986844062805176),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.0000059604644775, 114.75369262695312)
})
redNeonTube21.addComponentOrReplace(transform58)

const redNeonTube22 = new Entity('redNeonTube22')
engine.addEntity(redNeonTube22)
redNeonTube22.setParent(_scene)
redNeonTube22.addComponentOrReplace(gltfShape)
const transform59 = new Transform({
  position: new Vector3(0, 14.312268257141113, 8.037086486816406),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.425241231918335, 1.0000059604644775, 114.75346374511719)
})
redNeonTube22.addComponentOrReplace(transform59)

const floorGlass46 = new Entity('floorGlass46')
engine.addEntity(floorGlass46)
floorGlass46.setParent(_scene)
floorGlass46.addComponentOrReplace(gltfShape2)
const transform60 = new Transform({
  position: new Vector3(3.999147415161133, 16.116003036499023, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass46.addComponentOrReplace(transform60)

const floorGlass47 = new Entity('floorGlass47')
engine.addEntity(floorGlass47)
floorGlass47.setParent(_scene)
floorGlass47.addComponentOrReplace(gltfShape2)
const transform61 = new Transform({
  position: new Vector3(3.999147415161133, 16.116003036499023, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass47.addComponentOrReplace(transform61)

const floorGlass48 = new Entity('floorGlass48')
engine.addEntity(floorGlass48)
floorGlass48.setParent(_scene)
floorGlass48.addComponentOrReplace(gltfShape2)
const transform62 = new Transform({
  position: new Vector3(3.999147415161133, 16.116003036499023, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass48.addComponentOrReplace(transform62)

const floorGlass49 = new Entity('floorGlass49')
engine.addEntity(floorGlass49)
floorGlass49.setParent(_scene)
floorGlass49.addComponentOrReplace(gltfShape2)
const transform63 = new Transform({
  position: new Vector3(3.999375343322754, 16.116003036499023, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass49.addComponentOrReplace(transform63)

const floorGlass50 = new Entity('floorGlass50')
engine.addEntity(floorGlass50)
floorGlass50.setParent(_scene)
floorGlass50.addComponentOrReplace(gltfShape2)
const transform64 = new Transform({
  position: new Vector3(8.007821083068848, 16.116003036499023, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass50.addComponentOrReplace(transform64)

const floorGlass51 = new Entity('floorGlass51')
engine.addEntity(floorGlass51)
floorGlass51.setParent(_scene)
floorGlass51.addComponentOrReplace(gltfShape2)
const transform65 = new Transform({
  position: new Vector3(8.007821083068848, 16.116003036499023, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass51.addComponentOrReplace(transform65)

const floorGlass52 = new Entity('floorGlass52')
engine.addEntity(floorGlass52)
floorGlass52.setParent(_scene)
floorGlass52.addComponentOrReplace(gltfShape2)
const transform66 = new Transform({
  position: new Vector3(8.007821083068848, 16.116003036499023, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass52.addComponentOrReplace(transform66)

const floorGlass53 = new Entity('floorGlass53')
engine.addEntity(floorGlass53)
floorGlass53.setParent(_scene)
floorGlass53.addComponentOrReplace(gltfShape2)
const transform67 = new Transform({
  position: new Vector3(8.000624656677246, 16.116003036499023, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass53.addComponentOrReplace(transform67)

const floorGlass54 = new Entity('floorGlass54')
engine.addEntity(floorGlass54)
floorGlass54.setParent(_scene)
floorGlass54.addComponentOrReplace(gltfShape2)
const transform68 = new Transform({
  position: new Vector3(11.996179580688477, 16.116003036499023, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass54.addComponentOrReplace(transform68)

const floorGlass55 = new Entity('floorGlass55')
engine.addEntity(floorGlass55)
floorGlass55.setParent(_scene)
floorGlass55.addComponentOrReplace(gltfShape2)
const transform69 = new Transform({
  position: new Vector3(11.996179580688477, 16.116003036499023, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass55.addComponentOrReplace(transform69)

const floorGlass56 = new Entity('floorGlass56')
engine.addEntity(floorGlass56)
floorGlass56.setParent(_scene)
floorGlass56.addComponentOrReplace(gltfShape2)
const transform70 = new Transform({
  position: new Vector3(11.996179580688477, 16.116003036499023, 11.999053001403809),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass56.addComponentOrReplace(transform70)

const floorGlass57 = new Entity('floorGlass57')
engine.addEntity(floorGlass57)
floorGlass57.setParent(_scene)
floorGlass57.addComponentOrReplace(gltfShape2)
const transform71 = new Transform({
  position: new Vector3(12, 16.116003036499023, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass57.addComponentOrReplace(transform71)

const floorGlass58 = new Entity('floorGlass58')
engine.addEntity(floorGlass58)
floorGlass58.setParent(_scene)
floorGlass58.addComponentOrReplace(gltfShape2)
const transform72 = new Transform({
  position: new Vector3(15.997428894042969, 16.116003036499023, 4.000693321228027),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass58.addComponentOrReplace(transform72)

const floorGlass59 = new Entity('floorGlass59')
engine.addEntity(floorGlass59)
floorGlass59.setParent(_scene)
floorGlass59.addComponentOrReplace(gltfShape2)
const transform73 = new Transform({
  position: new Vector3(15.997428894042969, 16.116003036499023, 7.998810768127441),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorGlass59.addComponentOrReplace(transform73)

const floorGlass60 = new Entity('floorGlass60')
engine.addEntity(floorGlass60)
floorGlass60.setParent(_scene)
floorGlass60.addComponentOrReplace(gltfShape2)
const transform74 = new Transform({
  position: new Vector3(15.977499008178711, 16.116003036499023, 15.976698875427246),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1.994036316871643)
})
floorGlass60.addComponentOrReplace(transform74)

const redNeonTube23 = new Entity('redNeonTube23')
engine.addEntity(redNeonTube23)
redNeonTube23.setParent(_scene)
redNeonTube23.addComponentOrReplace(gltfShape)
const transform75 = new Transform({
  position: new Vector3(15.864707946777344, 17.934370040893555, 8.206141471862793),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.14564146101474762, 1.0000073909759521, 114.75346374511719)
})
redNeonTube23.addComponentOrReplace(transform75)

const redNeonTube24 = new Entity('redNeonTube24')
engine.addEntity(redNeonTube24)
redNeonTube24.setParent(_scene)
redNeonTube24.addComponentOrReplace(gltfShape)
const transform76 = new Transform({
  position: new Vector3(8.20470905303955, 17.937204360961914, 15.986844062805176),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(0.1463773548603058, 1.0000064373016357, 114.75375366210938)
})
redNeonTube24.addComponentOrReplace(transform76)

const redNeonTube25 = new Entity('redNeonTube25')
engine.addEntity(redNeonTube25)
redNeonTube25.setParent(_scene)
redNeonTube25.addComponentOrReplace(gltfShape)
const transform77 = new Transform({
  position: new Vector3(0, 17.913198471069336, 8.037086486816406),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.16139283776283264, 1.000006914138794, 114.75346374511719)
})
redNeonTube25.addComponentOrReplace(transform77)

const redNeonTube26 = new Entity('redNeonTube26')
engine.addEntity(redNeonTube26)
redNeonTube26.setParent(_scene)
redNeonTube26.addComponentOrReplace(gltfShape)
const transform78 = new Transform({
  position: new Vector3(8.20470905303955, 17.820009231567383, 0.13731706142425537),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(1.9324930906295776, 1.0000066757202148, 114.7537841796875)
})
redNeonTube26.addComponentOrReplace(transform78)

const redNeonTube27 = new Entity('redNeonTube27')
engine.addEntity(redNeonTube27)
redNeonTube27.setParent(_scene)
redNeonTube27.addComponentOrReplace(gltfShape)
const transform79 = new Transform({
  position: new Vector3(8.20470905303955, 14.34239673614502, 0.12936925888061523),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.0000061988830566, 114.75372314453125)
})
redNeonTube27.addComponentOrReplace(transform79)

const redNeonTube28 = new Entity('redNeonTube28')
engine.addEntity(redNeonTube28)
redNeonTube28.setParent(_scene)
redNeonTube28.addComponentOrReplace(gltfShape)
const transform80 = new Transform({
  position: new Vector3(8.20470905303955, 10.221837997436523, 0.15693187713623047),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.0000057220458984, 114.753662109375)
})
redNeonTube28.addComponentOrReplace(transform80)

const redNeonTube29 = new Entity('redNeonTube29')
engine.addEntity(redNeonTube29)
redNeonTube29.setParent(_scene)
redNeonTube29.addComponentOrReplace(gltfShape)
const transform81 = new Transform({
  position: new Vector3(8.20470905303955, 6.122361660003662, 0.15148210525512695),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.0000057220458984, 114.753662109375)
})
redNeonTube29.addComponentOrReplace(transform81)

const plainText3 = new Entity('plainText3')
engine.addEntity(plainText3)
plainText3.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(8.163972854614258, 9.409811973571777, 0.000164096214575693),
  rotation: new Quaternion(2.45665812725112e-15, -1, 1.1920928244535389e-7, -7.450580596923828e-9),
  scale: new Vector3(8.737273216247559, 9.4327974319458, 1.0000001192092896)
})
plainText3.addComponentOrReplace(transform82)

const plainText4 = new Entity('plainText4')
engine.addEntity(plainText4)
plainText4.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(8.163972854614258, 5.369676113128662, 0.000164096214575693),
  rotation: new Quaternion(2.45665812725112e-15, -1, 1.1920928244535389e-7, -7.450580596923828e-9),
  scale: new Vector3(8.737273216247559, 9.4327974319458, 1.0000001192092896)
})
plainText4.addComponentOrReplace(transform83)

const plainText2 = new Entity('plainText2')
engine.addEntity(plainText2)
plainText2.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(8.163972854614258, 13.547593116760254, 0.000164096214575693),
  rotation: new Quaternion(2.45665812725112e-15, -1, 1.1920928244535389e-7, -7.450580596923828e-9),
  scale: new Vector3(8.737273216247559, 9.4327974319458, 1.0000001192092896)
})
plainText2.addComponentOrReplace(transform84)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(0.28492701053619385, 1.6292911767959595, 1.3403842449188232),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000004768371582, 2, 1.000002384185791)
})
nftPictureFrame.addComponentOrReplace(transform85)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(0.4647136926651001, 1.62929105758667, 1.3403842449188232),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(2.0000052452087402, 2, 1.0000026226043701)
})
nftPictureFrame2.addComponentOrReplace(transform86)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(0.18930786848068237, 0.9306952953338623, 4.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315554141998291, 4.5, 1.0002344846725464)
})
nftPictureFrame7.addComponentOrReplace(transform87)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(0.18930786848068237, 0.9306952953338623, 6.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315556049346924, 4.5, 1.0002349615097046)
})
nftPictureFrame8.addComponentOrReplace(transform88)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(0.18930786848068237, 0.9306952953338623, 9.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315557956695557, 4.5, 1.0002354383468628)
})
nftPictureFrame9.addComponentOrReplace(transform89)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(0.18930786848068237, 0.9306952953338623, 11.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315558433532715, 4.5, 1.0002355575561523)
})
nftPictureFrame10.addComponentOrReplace(transform90)

const nftPictureFrame11 = new Entity('nftPictureFrame11')
engine.addEntity(nftPictureFrame11)
nftPictureFrame11.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(0.18930786848068237, 4.930695533752441, 4.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315556049346924, 4.5, 1.0002349615097046)
})
nftPictureFrame11.addComponentOrReplace(transform91)

const nftPictureFrame12 = new Entity('nftPictureFrame12')
engine.addEntity(nftPictureFrame12)
nftPictureFrame12.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(0.18930786848068237, 4.930695533752441, 6.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315557956695557, 4.5, 1.0002354383468628)
})
nftPictureFrame12.addComponentOrReplace(transform92)

const nftPictureFrame13 = new Entity('nftPictureFrame13')
engine.addEntity(nftPictureFrame13)
nftPictureFrame13.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(0.18930786848068237, 4.930695533752441, 9.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.3155598640441895, 4.5, 1.000235915184021)
})
nftPictureFrame13.addComponentOrReplace(transform93)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(0.18930786848068237, 4.930695533752441, 11.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315560340881348, 4.5, 1.0002360343933105)
})
nftPictureFrame14.addComponentOrReplace(transform94)

const nftPictureFrame15 = new Entity('nftPictureFrame15')
engine.addEntity(nftPictureFrame15)
nftPictureFrame15.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(0.18930786848068237, 8.930695533752441, 4.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.31555700302124, 4.5, 1.0002351999282837)
})
nftPictureFrame15.addComponentOrReplace(transform95)

const nftPictureFrame16 = new Entity('nftPictureFrame16')
engine.addEntity(nftPictureFrame16)
nftPictureFrame16.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(0.18930786848068237, 8.930695533752441, 6.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315558910369873, 4.5, 1.000235676765442)
})
nftPictureFrame16.addComponentOrReplace(transform96)

const nftPictureFrame17 = new Entity('nftPictureFrame17')
engine.addEntity(nftPictureFrame17)
nftPictureFrame17.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(0.18930786848068237, 8.930695533752441, 9.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315560817718506, 4.5, 1.0002361536026)
})
nftPictureFrame17.addComponentOrReplace(transform97)

const nftPictureFrame18 = new Entity('nftPictureFrame18')
engine.addEntity(nftPictureFrame18)
nftPictureFrame18.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(0.18930786848068237, 8.930695533752441, 11.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315561294555664, 4.5, 1.0002362728118896)
})
nftPictureFrame18.addComponentOrReplace(transform98)

const nftPictureFrame19 = new Entity('nftPictureFrame19')
engine.addEntity(nftPictureFrame19)
nftPictureFrame19.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(0.18930786848068237, 13.293418884277344, 4.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315557956695557, 4.5, 1.0002354383468628)
})
nftPictureFrame19.addComponentOrReplace(transform99)

const nftPictureFrame20 = new Entity('nftPictureFrame20')
engine.addEntity(nftPictureFrame20)
nftPictureFrame20.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(0.18930786848068237, 13.293418884277344, 6.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.3155598640441895, 4.5, 1.000235915184021)
})
nftPictureFrame20.addComponentOrReplace(transform100)

const nftPictureFrame21 = new Entity('nftPictureFrame21')
engine.addEntity(nftPictureFrame21)
nftPictureFrame21.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(0.18930786848068237, 13.293418884277344, 9.298744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.315561771392822, 4.5, 1.0002363920211792)
})
nftPictureFrame21.addComponentOrReplace(transform101)

const nftPictureFrame22 = new Entity('nftPictureFrame22')
engine.addEntity(nftPictureFrame22)
nftPictureFrame22.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(0.18930786848068237, 13.293418884277344, 11.798744201660156),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(4.3155622482299805, 4.5, 1.0002365112304688)
})
nftPictureFrame22.addComponentOrReplace(transform102)

const nftPictureFrame23 = new Entity('nftPictureFrame23')
engine.addEntity(nftPictureFrame23)
nftPictureFrame23.setParent(_scene)
const transform103 = new Transform({
  position: new Vector3(15.816289901733398, 0.9306941032409668, 4.298745632171631),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315578937530518, 4.5, 1.000240683555603)
})
nftPictureFrame23.addComponentOrReplace(transform103)

const nftPictureFrame24 = new Entity('nftPictureFrame24')
engine.addEntity(nftPictureFrame24)
nftPictureFrame24.setParent(_scene)
const transform104 = new Transform({
  position: new Vector3(15.816289901733398, 0.930694580078125, 6.798745632171631),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315577507019043, 4.5, 1.0002403259277344)
})
nftPictureFrame24.addComponentOrReplace(transform104)

const nftPictureFrame25 = new Entity('nftPictureFrame25')
engine.addEntity(nftPictureFrame25)
nftPictureFrame25.setParent(_scene)
const transform105 = new Transform({
  position: new Vector3(15.816289901733398, 0.9306955337524414, 9.298746109008789),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315574645996094, 4.5, 1.000239610671997)
})
nftPictureFrame25.addComponentOrReplace(transform105)

const nftPictureFrame26 = new Entity('nftPictureFrame26')
engine.addEntity(nftPictureFrame26)
nftPictureFrame26.setParent(_scene)
const transform106 = new Transform({
  position: new Vector3(15.816289901733398, 0.9306960105895996, 11.798746109008789),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315569877624512, 4.5, 1.0002384185791016)
})
nftPictureFrame26.addComponentOrReplace(transform106)

const nftPictureFrame27 = new Entity('nftPictureFrame27')
engine.addEntity(nftPictureFrame27)
nftPictureFrame27.setParent(_scene)
const transform107 = new Transform({
  position: new Vector3(15.816289901733398, 4.930696487426758, 11.798744201660156),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315567970275879, 4.5, 1.0002379417419434)
})
nftPictureFrame27.addComponentOrReplace(transform107)

const nftPictureFrame28 = new Entity('nftPictureFrame28')
engine.addEntity(nftPictureFrame28)
nftPictureFrame28.setParent(_scene)
const transform108 = new Transform({
  position: new Vector3(15.816289901733398, 4.930695533752441, 9.298744201660156),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315570831298828, 4.5, 1.0002386569976807)
})
nftPictureFrame28.addComponentOrReplace(transform108)

const nftPictureFrame29 = new Entity('nftPictureFrame29')
engine.addEntity(nftPictureFrame29)
nftPictureFrame29.setParent(_scene)
const transform109 = new Transform({
  position: new Vector3(15.816289901733398, 4.930695533752441, 6.7987446784973145),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315573692321777, 4.5, 1.000239372253418)
})
nftPictureFrame29.addComponentOrReplace(transform109)

const nftPictureFrame30 = new Entity('nftPictureFrame30')
engine.addEntity(nftPictureFrame30)
nftPictureFrame30.setParent(_scene)
const transform110 = new Transform({
  position: new Vector3(15.816289901733398, 4.930694580078125, 4.2987446784973145),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315575122833252, 4.5, 1.0002397298812866)
})
nftPictureFrame30.addComponentOrReplace(transform110)

const nftPictureFrame31 = new Entity('nftPictureFrame31')
engine.addEntity(nftPictureFrame31)
nftPictureFrame31.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(15.816289901733398, 8.930694580078125, 4.298743724822998),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315572261810303, 4.5, 1.0002390146255493)
})
nftPictureFrame31.addComponentOrReplace(transform111)

const nftPictureFrame32 = new Entity('nftPictureFrame32')
engine.addEntity(nftPictureFrame32)
nftPictureFrame32.setParent(_scene)
const transform112 = new Transform({
  position: new Vector3(15.816289901733398, 8.930695533752441, 6.798743724822998),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315570831298828, 4.5, 1.0002386569976807)
})
nftPictureFrame32.addComponentOrReplace(transform112)

const nftPictureFrame33 = new Entity('nftPictureFrame33')
engine.addEntity(nftPictureFrame33)
nftPictureFrame33.setParent(_scene)
const transform113 = new Transform({
  position: new Vector3(15.816289901733398, 8.930695533752441, 9.298744201660156),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315567970275879, 4.5, 1.0002379417419434)
})
nftPictureFrame33.addComponentOrReplace(transform113)

const nftPictureFrame34 = new Entity('nftPictureFrame34')
engine.addEntity(nftPictureFrame34)
nftPictureFrame34.setParent(_scene)
const transform114 = new Transform({
  position: new Vector3(15.816289901733398, 8.930696487426758, 11.798744201660156),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.31556510925293, 4.5, 1.000237226486206)
})
nftPictureFrame34.addComponentOrReplace(transform114)

const nftPictureFrame35 = new Entity('nftPictureFrame35')
engine.addEntity(nftPictureFrame35)
nftPictureFrame35.setParent(_scene)
const transform115 = new Transform({
  position: new Vector3(15.816289901733398, 13.29341983795166, 11.798742294311523),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.3155622482299805, 4.5, 1.0002365112304688)
})
nftPictureFrame35.addComponentOrReplace(transform115)

const nftPictureFrame36 = new Entity('nftPictureFrame36')
engine.addEntity(nftPictureFrame36)
nftPictureFrame36.setParent(_scene)
const transform116 = new Transform({
  position: new Vector3(15.816289901733398, 13.293418884277344, 9.298742294311523),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.31556510925293, 4.5, 1.000237226486206)
})
nftPictureFrame36.addComponentOrReplace(transform116)

const nftPictureFrame37 = new Entity('nftPictureFrame37')
engine.addEntity(nftPictureFrame37)
nftPictureFrame37.setParent(_scene)
const transform117 = new Transform({
  position: new Vector3(15.816289901733398, 13.293418884277344, 6.798742771148682),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.315567970275879, 4.5, 1.0002379417419434)
})
nftPictureFrame37.addComponentOrReplace(transform117)

const nftPictureFrame38 = new Entity('nftPictureFrame38')
engine.addEntity(nftPictureFrame38)
nftPictureFrame38.setParent(_scene)
const transform118 = new Transform({
  position: new Vector3(15.816289901733398, 13.293416976928711, 4.298742771148682),
  rotation: new Quaternion(-1.1366627345572259e-15, -0.7120680809020996, 8.488513003612752e-8, 0.7021104693412781),
  scale: new Vector3(4.3155694007873535, 4.5, 1.000238299369812)
})
nftPictureFrame38.addComponentOrReplace(transform118)

const nftPictureFrame39 = new Entity('nftPictureFrame39')
engine.addEntity(nftPictureFrame39)
nftPictureFrame39.setParent(_scene)
const transform119 = new Transform({
  position: new Vector3(12.030223846435547, 0.930694580078125, 15.764662742614746),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315582275390625, 4.5, 1.0002418756484985)
})
nftPictureFrame39.addComponentOrReplace(transform119)

const nftPictureFrame40 = new Entity('nftPictureFrame40')
engine.addEntity(nftPictureFrame40)
nftPictureFrame40.setParent(_scene)
const transform120 = new Transform({
  position: new Vector3(9.53022289276123, 0.930694580078125, 15.764662742614746),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.31558084487915, 4.5, 1.0002415180206299)
})
nftPictureFrame40.addComponentOrReplace(transform120)

const nftPictureFrame41 = new Entity('nftPictureFrame41')
engine.addEntity(nftPictureFrame41)
nftPictureFrame41.setParent(_scene)
const transform121 = new Transform({
  position: new Vector3(7.030222415924072, 0.9306955337524414, 15.764662742614746),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315577983856201, 4.5, 1.0002408027648926)
})
nftPictureFrame41.addComponentOrReplace(transform121)

const nftPictureFrame42 = new Entity('nftPictureFrame42')
engine.addEntity(nftPictureFrame42)
nftPictureFrame42.setParent(_scene)
const transform122 = new Transform({
  position: new Vector3(4.530221939086914, 0.9306955337524414, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315573215484619, 4.5, 1.000239610671997)
})
nftPictureFrame42.addComponentOrReplace(transform122)

const nftPictureFrame43 = new Entity('nftPictureFrame43')
engine.addEntity(nftPictureFrame43)
nftPictureFrame43.setParent(_scene)
const transform123 = new Transform({
  position: new Vector3(12.030223846435547, 4.930695056915283, 15.764662742614746),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315578460693359, 4.5, 1.0002409219741821)
})
nftPictureFrame43.addComponentOrReplace(transform123)

const nftPictureFrame44 = new Entity('nftPictureFrame44')
engine.addEntity(nftPictureFrame44)
nftPictureFrame44.setParent(_scene)
const transform124 = new Transform({
  position: new Vector3(9.530223846435547, 4.930695533752441, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315577030181885, 4.5, 1.0002405643463135)
})
nftPictureFrame44.addComponentOrReplace(transform124)

const nftPictureFrame45 = new Entity('nftPictureFrame45')
engine.addEntity(nftPictureFrame45)
nftPictureFrame45.setParent(_scene)
const transform125 = new Transform({
  position: new Vector3(7.030223846435547, 4.930695533752441, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.3155741691589355, 4.5, 1.0002398490905762)
})
nftPictureFrame45.addComponentOrReplace(transform125)

const nftPictureFrame46 = new Entity('nftPictureFrame46')
engine.addEntity(nftPictureFrame46)
nftPictureFrame46.setParent(_scene)
const transform126 = new Transform({
  position: new Vector3(4.530223846435547, 4.9306960105896, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315571308135986, 4.5, 1.0002391338348389)
})
nftPictureFrame46.addComponentOrReplace(transform126)

const nftPictureFrame47 = new Entity('nftPictureFrame47')
engine.addEntity(nftPictureFrame47)
nftPictureFrame47.setParent(_scene)
const transform127 = new Transform({
  position: new Vector3(12.030224800109863, 8.930694580078125, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.31557559967041, 4.5, 1.0002402067184448)
})
nftPictureFrame47.addComponentOrReplace(transform127)

const nftPictureFrame48 = new Entity('nftPictureFrame48')
engine.addEntity(nftPictureFrame48)
nftPictureFrame48.setParent(_scene)
const transform128 = new Transform({
  position: new Vector3(9.530223846435547, 8.930695533752441, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.3155741691589355, 4.5, 1.0002398490905762)
})
nftPictureFrame48.addComponentOrReplace(transform128)

const nftPictureFrame49 = new Entity('nftPictureFrame49')
engine.addEntity(nftPictureFrame49)
nftPictureFrame49.setParent(_scene)
const transform129 = new Transform({
  position: new Vector3(7.030223369598389, 8.930695533752441, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315571308135986, 4.5, 1.0002391338348389)
})
nftPictureFrame49.addComponentOrReplace(transform129)

const nftPictureFrame50 = new Entity('nftPictureFrame50')
engine.addEntity(nftPictureFrame50)
nftPictureFrame50.setParent(_scene)
const transform130 = new Transform({
  position: new Vector3(4.5302228927612305, 8.930696487426758, 15.764660835266113),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315568447113037, 4.5, 1.0002384185791016)
})
nftPictureFrame50.addComponentOrReplace(transform130)

const nftPictureFrame51 = new Entity('nftPictureFrame51')
engine.addEntity(nftPictureFrame51)
nftPictureFrame51.setParent(_scene)
const transform131 = new Transform({
  position: new Vector3(12.030224800109863, 13.293416976928711, 15.76466178894043),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315572738647461, 4.5, 1.0002394914627075)
})
nftPictureFrame51.addComponentOrReplace(transform131)

const nftPictureFrame52 = new Entity('nftPictureFrame52')
engine.addEntity(nftPictureFrame52)
nftPictureFrame52.setParent(_scene)
const transform132 = new Transform({
  position: new Vector3(9.530224800109863, 13.293418884277344, 15.764660835266113),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315571308135986, 4.5, 1.0002391338348389)
})
nftPictureFrame52.addComponentOrReplace(transform132)

const nftPictureFrame53 = new Entity('nftPictureFrame53')
engine.addEntity(nftPictureFrame53)
nftPictureFrame53.setParent(_scene)
const transform133 = new Transform({
  position: new Vector3(7.030224800109863, 13.293418884277344, 15.764660835266113),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315568447113037, 4.5, 1.0002384185791016)
})
nftPictureFrame53.addComponentOrReplace(transform133)

const nftPictureFrame54 = new Entity('nftPictureFrame54')
engine.addEntity(nftPictureFrame54)
nftPictureFrame54.setParent(_scene)
const transform134 = new Transform({
  position: new Vector3(4.530224800109863, 13.293418884277344, 15.764660835266113),
  rotation: new Quaternion(-9.600220602203405e-15, -0.9999752044677734, 1.1920632658757313e-7, -0.00704109575599432),
  scale: new Vector3(4.315565586090088, 4.5, 1.0002377033233643)
})
nftPictureFrame54.addComponentOrReplace(transform134)

const redNeonTube = new Entity('redNeonTube')
engine.addEntity(redNeonTube)
redNeonTube.setParent(_scene)
redNeonTube.addComponentOrReplace(gltfShape)
const transform135 = new Transform({
  position: new Vector3(4.077718734741211, 1.9562644958496094, 0.15148231387138367),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.000005841255188, 49.42108154296875)
})
redNeonTube.addComponentOrReplace(transform135)

const redNeonTube2 = new Entity('redNeonTube2')
engine.addEntity(redNeonTube2)
redNeonTube2.setParent(_scene)
redNeonTube2.addComponentOrReplace(gltfShape)
const transform136 = new Transform({
  position: new Vector3(12.069624900817871, 1.9562644958496094, 0.15148137509822845),
  rotation: new Quaternion(-0.5002247095108032, 0.5002247095108032, -0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(2.4252381324768066, 1.0000059604644775, 49.42108154296875)
})
redNeonTube2.addComponentOrReplace(transform136)

const redNeonTube3 = new Entity('redNeonTube3')
engine.addEntity(redNeonTube3)
redNeonTube3.setParent(_scene)
redNeonTube3.addComponentOrReplace(gltfShape)
const transform137 = new Transform({
  position: new Vector3(15.800870895385742, 1.9566090106964111, 1.30887770652771),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252421855926514, 1.0000064373016357, 1)
})
redNeonTube3.addComponentOrReplace(transform137)

const nftPictureFrame55 = new Entity('nftPictureFrame55')
engine.addEntity(nftPictureFrame55)
nftPictureFrame55.setParent(_scene)
const transform138 = new Transform({
  position: new Vector3(15.771493911743164, 1.6292911767959595, 1.3403842449188232),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000076293945312, 2, 1.0000038146972656)
})
nftPictureFrame55.addComponentOrReplace(transform138)

const nftPictureFrame56 = new Entity('nftPictureFrame56')
engine.addEntity(nftPictureFrame56)
nftPictureFrame56.setParent(_scene)
const transform139 = new Transform({
  position: new Vector3(15.95128059387207, 1.62929105758667, 1.3403842449188232),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(2.000006675720215, 2, 1.0000033378601074)
})
nftPictureFrame56.addComponentOrReplace(transform139)

const nftPictureFrame57 = new Entity('nftPictureFrame57')
engine.addEntity(nftPictureFrame57)
nftPictureFrame57.setParent(_scene)
const transform140 = new Transform({
  position: new Vector3(15.95128059387207, 5.809698581695557, 1.3403842449188232),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(2.000006914138794, 2, 1.000003457069397)
})
nftPictureFrame57.addComponentOrReplace(transform140)

const nftPictureFrame58 = new Entity('nftPictureFrame58')
engine.addEntity(nftPictureFrame58)
nftPictureFrame58.setParent(_scene)
const transform141 = new Transform({
  position: new Vector3(15.771493911743164, 5.809699058532715, 1.3403842449188232),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000081062316895, 2, 1.0000040531158447)
})
nftPictureFrame58.addComponentOrReplace(transform141)

const redNeonTube4 = new Entity('redNeonTube4')
engine.addEntity(redNeonTube4)
redNeonTube4.setParent(_scene)
redNeonTube4.addComponentOrReplace(gltfShape)
const transform142 = new Transform({
  position: new Vector3(15.800870895385742, 6.137016773223877, 1.30887770652771),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252426624298096, 1.0000066757202148, 1)
})
redNeonTube4.addComponentOrReplace(transform142)

const nftPictureFrame59 = new Entity('nftPictureFrame59')
engine.addEntity(nftPictureFrame59)
nftPictureFrame59.setParent(_scene)
const transform143 = new Transform({
  position: new Vector3(15.95128059387207, 9.764010429382324, 1.3403842449188232),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(2.000007152557373, 2, 1.0000035762786865)
})
nftPictureFrame59.addComponentOrReplace(transform143)

const nftPictureFrame60 = new Entity('nftPictureFrame60')
engine.addEntity(nftPictureFrame60)
nftPictureFrame60.setParent(_scene)
const transform144 = new Transform({
  position: new Vector3(15.771493911743164, 9.76401138305664, 1.3403842449188232),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000085830688477, 2, 1.0000042915344238)
})
nftPictureFrame60.addComponentOrReplace(transform144)

const redNeonTube5 = new Entity('redNeonTube5')
engine.addEntity(redNeonTube5)
redNeonTube5.setParent(_scene)
redNeonTube5.addComponentOrReplace(gltfShape)
const transform145 = new Transform({
  position: new Vector3(15.800870895385742, 10.091328620910645, 1.30887770652771),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252431392669678, 1.000006914138794, 1)
})
redNeonTube5.addComponentOrReplace(transform145)

const nftPictureFrame61 = new Entity('nftPictureFrame61')
engine.addEntity(nftPictureFrame61)
nftPictureFrame61.setParent(_scene)
const transform146 = new Transform({
  position: new Vector3(15.95128059387207, 13.928465843200684, 1.3403842449188232),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(2.000007390975952, 2, 1.000003695487976)
})
nftPictureFrame61.addComponentOrReplace(transform146)

const nftPictureFrame62 = new Entity('nftPictureFrame62')
engine.addEntity(nftPictureFrame62)
nftPictureFrame62.setParent(_scene)
const transform147 = new Transform({
  position: new Vector3(15.771493911743164, 13.928466796875, 1.3403842449188232),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.000009059906006, 2, 1.000004529953003)
})
nftPictureFrame62.addComponentOrReplace(transform147)

const redNeonTube8 = new Entity('redNeonTube8')
engine.addEntity(redNeonTube8)
redNeonTube8.setParent(_scene)
redNeonTube8.addComponentOrReplace(gltfShape)
const transform148 = new Transform({
  position: new Vector3(15.800870895385742, 14.255784034729004, 1.30887770652771),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.425243616104126, 1.000007152557373, 1)
})
redNeonTube8.addComponentOrReplace(transform148)

const nftPictureFrame63 = new Entity('nftPictureFrame63')
engine.addEntity(nftPictureFrame63)
nftPictureFrame63.setParent(_scene)
const transform149 = new Transform({
  position: new Vector3(15.95128059387207, 17.5860595703125, 1.3403842449188232),
  rotation: new Quaternion(8.547308885580658e-16, 0.7021104693412781, -8.369807602548462e-8, 0.7120680809020996),
  scale: new Vector3(2.0000078678131104, 2, 1.0000039339065552)
})
nftPictureFrame63.addComponentOrReplace(transform149)

const nftPictureFrame64 = new Entity('nftPictureFrame64')
engine.addEntity(nftPictureFrame64)
nftPictureFrame64.setParent(_scene)
const transform150 = new Transform({
  position: new Vector3(15.771493911743164, 17.586061477661133, 1.3403842449188232),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.0000100135803223, 2, 1.0000050067901611)
})
nftPictureFrame64.addComponentOrReplace(transform150)

const redNeonTube9 = new Entity('redNeonTube9')
engine.addEntity(redNeonTube9)
redNeonTube9.setParent(_scene)
redNeonTube9.addComponentOrReplace(gltfShape)
const transform151 = new Transform({
  position: new Vector3(15.800870895385742, 17.913379669189453, 1.30887770652771),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(2.4252445697784424, 1.0000076293945312, 1)
})
redNeonTube9.addComponentOrReplace(transform151)

const plainText5 = new Entity('plainText5')
engine.addEntity(plainText5)
plainText5.setParent(_scene)
const transform152 = new Transform({
  position: new Vector3(8.163972854614258, 16.852317810058594, 0.23302555084228516),
  rotation: new Quaternion(5.844343542823353e-23, -2.2351741790771484e-8, 3.1387062087974643e-15, -1),
  scale: new Vector3(7.833901882171631, 8.000870704650879, 1)
})
plainText5.addComponentOrReplace(transform152)

const imageCubeC2 = new Entity('imageCubeC2')
engine.addEntity(imageCubeC2)
imageCubeC2.setParent(_scene)
const transform153 = new Transform({
  position: new Vector3(2.4879415035247803, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000001311302185, 1, 1.349877119064331)
})
imageCubeC2.addComponentOrReplace(transform153)

const imageCubeC = new Entity('imageCubeC')
engine.addEntity(imageCubeC)
imageCubeC.setParent(_scene)
const transform154 = new Transform({
  position: new Vector3(3.3660356998443604, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000015497207642, 1, 1.3498780727386475)
})
imageCubeC.addComponentOrReplace(transform154)

const imageCubeC4 = new Entity('imageCubeC4')
engine.addEntity(imageCubeC4)
imageCubeC4.setParent(_scene)
const transform155 = new Transform({
  position: new Vector3(4.250650405883789, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000017881393433, 1, 1.3498783111572266)
})
imageCubeC4.addComponentOrReplace(transform155)

const imageCubeC5 = new Entity('imageCubeC5')
engine.addEntity(imageCubeC5)
imageCubeC5.setParent(_scene)
const transform156 = new Transform({
  position: new Vector3(3.3660356998443604, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000017881393433, 1, 1.3498783111572266)
})
imageCubeC5.addComponentOrReplace(transform156)

const imageCubeC6 = new Entity('imageCubeC6')
engine.addEntity(imageCubeC6)
imageCubeC6.setParent(_scene)
const transform157 = new Transform({
  position: new Vector3(2.4879415035247803, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000015497207642, 1, 1.3498773574829102)
})
imageCubeC6.addComponentOrReplace(transform157)

const imageCubeC7 = new Entity('imageCubeC7')
engine.addEntity(imageCubeC7)
imageCubeC7.setParent(_scene)
const transform158 = new Transform({
  position: new Vector3(4.250650405883789, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498785495758057)
})
imageCubeC7.addComponentOrReplace(transform158)

const imageCubeC8 = new Entity('imageCubeC8')
engine.addEntity(imageCubeC8)
imageCubeC8.setParent(_scene)
const transform159 = new Transform({
  position: new Vector3(3.3660356998443604, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498785495758057)
})
imageCubeC8.addComponentOrReplace(transform159)

const imageCubeC9 = new Entity('imageCubeC9')
engine.addEntity(imageCubeC9)
imageCubeC9.setParent(_scene)
const transform160 = new Transform({
  position: new Vector3(2.4879415035247803, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000017881393433, 1, 1.3498775959014893)
})
imageCubeC9.addComponentOrReplace(transform160)

const imageCubeC10 = new Entity('imageCubeC10')
engine.addEntity(imageCubeC10)
imageCubeC10.setParent(_scene)
const transform161 = new Transform({
  position: new Vector3(4.250650405883789, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498787879943848)
})
imageCubeC10.addComponentOrReplace(transform161)

const imageCubeC11 = new Entity('imageCubeC11')
engine.addEntity(imageCubeC11)
imageCubeC11.setParent(_scene)
const transform162 = new Transform({
  position: new Vector3(3.3660356998443604, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498787879943848)
})
imageCubeC11.addComponentOrReplace(transform162)

const imageCubeC12 = new Entity('imageCubeC12')
engine.addEntity(imageCubeC12)
imageCubeC12.setParent(_scene)
const transform163 = new Transform({
  position: new Vector3(2.4879415035247803, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498778343200684)
})
imageCubeC12.addComponentOrReplace(transform163)

const imageCubeC13 = new Entity('imageCubeC13')
engine.addEntity(imageCubeC13)
imageCubeC13.setParent(_scene)
const transform164 = new Transform({
  position: new Vector3(4.250650405883789, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498790264129639)
})
imageCubeC13.addComponentOrReplace(transform164)

const imageCubeC14 = new Entity('imageCubeC14')
engine.addEntity(imageCubeC14)
imageCubeC14.setParent(_scene)
const transform165 = new Transform({
  position: new Vector3(7.154218673706055, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498790264129639)
})
imageCubeC14.addComponentOrReplace(transform165)

const imageCubeC15 = new Entity('imageCubeC15')
engine.addEntity(imageCubeC15)
imageCubeC15.setParent(_scene)
const transform166 = new Transform({
  position: new Vector3(6.276124954223633, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498780727386475)
})
imageCubeC15.addComponentOrReplace(transform166)

const imageCubeC16 = new Entity('imageCubeC16')
engine.addEntity(imageCubeC16)
imageCubeC16.setParent(_scene)
const transform167 = new Transform({
  position: new Vector3(8.038833618164062, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.349879264831543)
})
imageCubeC16.addComponentOrReplace(transform167)

const imageCubeC17 = new Entity('imageCubeC17')
engine.addEntity(imageCubeC17)
imageCubeC17.setParent(_scene)
const transform168 = new Transform({
  position: new Vector3(8.038833618164062, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498790264129639)
})
imageCubeC17.addComponentOrReplace(transform168)

const imageCubeC18 = new Entity('imageCubeC18')
engine.addEntity(imageCubeC18)
imageCubeC18.setParent(_scene)
const transform169 = new Transform({
  position: new Vector3(7.154218673706055, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498787879943848)
})
imageCubeC18.addComponentOrReplace(transform169)

const imageCubeC19 = new Entity('imageCubeC19')
engine.addEntity(imageCubeC19)
imageCubeC19.setParent(_scene)
const transform170 = new Transform({
  position: new Vector3(6.276124954223633, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498778343200684)
})
imageCubeC19.addComponentOrReplace(transform170)

const imageCubeC20 = new Entity('imageCubeC20')
engine.addEntity(imageCubeC20)
imageCubeC20.setParent(_scene)
const transform171 = new Transform({
  position: new Vector3(8.038833618164062, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498787879943848)
})
imageCubeC20.addComponentOrReplace(transform171)

const imageCubeC21 = new Entity('imageCubeC21')
engine.addEntity(imageCubeC21)
imageCubeC21.setParent(_scene)
const transform172 = new Transform({
  position: new Vector3(7.154218673706055, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498785495758057)
})
imageCubeC21.addComponentOrReplace(transform172)

const imageCubeC22 = new Entity('imageCubeC22')
engine.addEntity(imageCubeC22)
imageCubeC22.setParent(_scene)
const transform173 = new Transform({
  position: new Vector3(6.276124954223633, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000017881393433, 1, 1.3498775959014893)
})
imageCubeC22.addComponentOrReplace(transform173)

const imageCubeC23 = new Entity('imageCubeC23')
engine.addEntity(imageCubeC23)
imageCubeC23.setParent(_scene)
const transform174 = new Transform({
  position: new Vector3(8.038833618164062, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498785495758057)
})
imageCubeC23.addComponentOrReplace(transform174)

const imageCubeC24 = new Entity('imageCubeC24')
engine.addEntity(imageCubeC24)
imageCubeC24.setParent(_scene)
const transform175 = new Transform({
  position: new Vector3(7.154218673706055, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000017881393433, 1, 1.3498783111572266)
})
imageCubeC24.addComponentOrReplace(transform175)

const imageCubeC25 = new Entity('imageCubeC25')
engine.addEntity(imageCubeC25)
imageCubeC25.setParent(_scene)
const transform176 = new Transform({
  position: new Vector3(6.276124954223633, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000015497207642, 1, 1.3498773574829102)
})
imageCubeC25.addComponentOrReplace(transform176)

const imageCubeC26 = new Entity('imageCubeC26')
engine.addEntity(imageCubeC26)
imageCubeC26.setParent(_scene)
const transform177 = new Transform({
  position: new Vector3(10.795225143432617, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.349879264831543)
})
imageCubeC26.addComponentOrReplace(transform177)

const imageCubeC27 = new Entity('imageCubeC27')
engine.addEntity(imageCubeC27)
imageCubeC27.setParent(_scene)
const transform178 = new Transform({
  position: new Vector3(9.917131423950195, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498783111572266)
})
imageCubeC27.addComponentOrReplace(transform178)

const imageCubeC28 = new Entity('imageCubeC28')
engine.addEntity(imageCubeC28)
imageCubeC28.setParent(_scene)
const transform179 = new Transform({
  position: new Vector3(11.679840087890625, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.349879503250122)
})
imageCubeC28.addComponentOrReplace(transform179)

const imageCubeC29 = new Entity('imageCubeC29')
engine.addEntity(imageCubeC29)
imageCubeC29.setParent(_scene)
const transform180 = new Transform({
  position: new Vector3(11.679840087890625, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.349879264831543)
})
imageCubeC29.addComponentOrReplace(transform180)

const imageCubeC30 = new Entity('imageCubeC30')
engine.addEntity(imageCubeC30)
imageCubeC30.setParent(_scene)
const transform181 = new Transform({
  position: new Vector3(10.795225143432617, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498790264129639)
})
imageCubeC30.addComponentOrReplace(transform181)

const imageCubeC31 = new Entity('imageCubeC31')
engine.addEntity(imageCubeC31)
imageCubeC31.setParent(_scene)
const transform182 = new Transform({
  position: new Vector3(9.917131423950195, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498780727386475)
})
imageCubeC31.addComponentOrReplace(transform182)

const imageCubeC32 = new Entity('imageCubeC32')
engine.addEntity(imageCubeC32)
imageCubeC32.setParent(_scene)
const transform183 = new Transform({
  position: new Vector3(11.679840087890625, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498790264129639)
})
imageCubeC32.addComponentOrReplace(transform183)

const imageCubeC33 = new Entity('imageCubeC33')
engine.addEntity(imageCubeC33)
imageCubeC33.setParent(_scene)
const transform184 = new Transform({
  position: new Vector3(10.795225143432617, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498787879943848)
})
imageCubeC33.addComponentOrReplace(transform184)

const imageCubeC34 = new Entity('imageCubeC34')
engine.addEntity(imageCubeC34)
imageCubeC34.setParent(_scene)
const transform185 = new Transform({
  position: new Vector3(9.917131423950195, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498778343200684)
})
imageCubeC34.addComponentOrReplace(transform185)

const imageCubeC35 = new Entity('imageCubeC35')
engine.addEntity(imageCubeC35)
imageCubeC35.setParent(_scene)
const transform186 = new Transform({
  position: new Vector3(11.679840087890625, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498787879943848)
})
imageCubeC35.addComponentOrReplace(transform186)

const imageCubeC36 = new Entity('imageCubeC36')
engine.addEntity(imageCubeC36)
imageCubeC36.setParent(_scene)
const transform187 = new Transform({
  position: new Vector3(10.795225143432617, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498785495758057)
})
imageCubeC36.addComponentOrReplace(transform187)

const imageCubeC37 = new Entity('imageCubeC37')
engine.addEntity(imageCubeC37)
imageCubeC37.setParent(_scene)
const transform188 = new Transform({
  position: new Vector3(9.917131423950195, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000017881393433, 1, 1.3498775959014893)
})
imageCubeC37.addComponentOrReplace(transform188)

const imageCubeC38 = new Entity('imageCubeC38')
engine.addEntity(imageCubeC38)
imageCubeC38.setParent(_scene)
const transform189 = new Transform({
  position: new Vector3(14.425786972045898, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.349879503250122)
})
imageCubeC38.addComponentOrReplace(transform189)

const imageCubeC39 = new Entity('imageCubeC39')
engine.addEntity(imageCubeC39)
imageCubeC39.setParent(_scene)
const transform190 = new Transform({
  position: new Vector3(13.547693252563477, 16.128873825073242, 9.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.3498785495758057)
})
imageCubeC39.addComponentOrReplace(transform190)

const imageCubeC42 = new Entity('imageCubeC42')
engine.addEntity(imageCubeC42)
imageCubeC42.setParent(_scene)
const transform191 = new Transform({
  position: new Vector3(14.425786972045898, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.349879264831543)
})
imageCubeC42.addComponentOrReplace(transform191)

const imageCubeC43 = new Entity('imageCubeC43')
engine.addEntity(imageCubeC43)
imageCubeC43.setParent(_scene)
const transform192 = new Transform({
  position: new Vector3(13.547693252563477, 16.128873825073242, 8.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498783111572266)
})
imageCubeC43.addComponentOrReplace(transform192)

const imageCubeC45 = new Entity('imageCubeC45')
engine.addEntity(imageCubeC45)
imageCubeC45.setParent(_scene)
const transform193 = new Transform({
  position: new Vector3(14.425786972045898, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498790264129639)
})
imageCubeC45.addComponentOrReplace(transform193)

const imageCubeC46 = new Entity('imageCubeC46')
engine.addEntity(imageCubeC46)
imageCubeC46.setParent(_scene)
const transform194 = new Transform({
  position: new Vector3(13.547693252563477, 16.128873825073242, 6.713662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498780727386475)
})
imageCubeC46.addComponentOrReplace(transform194)

const imageCubeC48 = new Entity('imageCubeC48')
engine.addEntity(imageCubeC48)
imageCubeC48.setParent(_scene)
const transform195 = new Transform({
  position: new Vector3(14.425786972045898, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498787879943848)
})
imageCubeC48.addComponentOrReplace(transform195)

const imageCubeC49 = new Entity('imageCubeC49')
engine.addEntity(imageCubeC49)
imageCubeC49.setParent(_scene)
const transform196 = new Transform({
  position: new Vector3(13.547693252563477, 16.128873825073242, 5.213662624359131),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 1.3498778343200684)
})
imageCubeC49.addComponentOrReplace(transform196)

const imageCubeC51 = new Entity('imageCubeC51')
engine.addEntity(imageCubeC51)
imageCubeC51.setParent(_scene)
const transform197 = new Transform({
  position: new Vector3(14.425786972045898, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000032186508179, 1, 1.3498797416687012)
})
imageCubeC51.addComponentOrReplace(transform197)

const imageCubeC52 = new Entity('imageCubeC52')
engine.addEntity(imageCubeC52)
imageCubeC52.setParent(_scene)
const transform198 = new Transform({
  position: new Vector3(13.547693252563477, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.3498787879943848)
})
imageCubeC52.addComponentOrReplace(transform198)

const imageCubeC53 = new Entity('imageCubeC53')
engine.addEntity(imageCubeC53)
imageCubeC53.setParent(_scene)
const transform199 = new Transform({
  position: new Vector3(11.679840087890625, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000032186508179, 1, 1.3498797416687012)
})
imageCubeC53.addComponentOrReplace(transform199)

const imageCubeC54 = new Entity('imageCubeC54')
engine.addEntity(imageCubeC54)
imageCubeC54.setParent(_scene)
const transform200 = new Transform({
  position: new Vector3(10.795225143432617, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.349879503250122)
})
imageCubeC54.addComponentOrReplace(transform200)

const imageCubeC55 = new Entity('imageCubeC55')
engine.addEntity(imageCubeC55)
imageCubeC55.setParent(_scene)
const transform201 = new Transform({
  position: new Vector3(9.917131423950195, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.3498785495758057)
})
imageCubeC55.addComponentOrReplace(transform201)

const imageCubeC56 = new Entity('imageCubeC56')
engine.addEntity(imageCubeC56)
imageCubeC56.setParent(_scene)
const transform202 = new Transform({
  position: new Vector3(8.038833618164062, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.349879503250122)
})
imageCubeC56.addComponentOrReplace(transform202)

const imageCubeC57 = new Entity('imageCubeC57')
engine.addEntity(imageCubeC57)
imageCubeC57.setParent(_scene)
const transform203 = new Transform({
  position: new Vector3(7.154218673706055, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.349879264831543)
})
imageCubeC57.addComponentOrReplace(transform203)

const imageCubeC58 = new Entity('imageCubeC58')
engine.addEntity(imageCubeC58)
imageCubeC58.setParent(_scene)
const transform204 = new Transform({
  position: new Vector3(6.276124954223633, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498783111572266)
})
imageCubeC58.addComponentOrReplace(transform204)

const imageCubeC59 = new Entity('imageCubeC59')
engine.addEntity(imageCubeC59)
imageCubeC59.setParent(_scene)
const transform205 = new Transform({
  position: new Vector3(4.250650405883789, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.349879264831543)
})
imageCubeC59.addComponentOrReplace(transform205)

const imageCubeC60 = new Entity('imageCubeC60')
engine.addEntity(imageCubeC60)
imageCubeC60.setParent(_scene)
const transform206 = new Transform({
  position: new Vector3(3.3660354614257812, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498790264129639)
})
imageCubeC60.addComponentOrReplace(transform206)

const imageCubeC61 = new Entity('imageCubeC61')
engine.addEntity(imageCubeC61)
imageCubeC61.setParent(_scene)
const transform207 = new Transform({
  position: new Vector3(2.4879417419433594, 16.128873825073242, 11.213663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 1.3498780727386475)
})
imageCubeC61.addComponentOrReplace(transform207)

const imageCubeC66 = new Entity('imageCubeC66')
engine.addEntity(imageCubeC66)
imageCubeC66.setParent(_scene)
const transform208 = new Transform({
  position: new Vector3(10.795225143432617, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000032186508179, 1, 1.3498797416687012)
})
imageCubeC66.addComponentOrReplace(transform208)

const imageCubeC67 = new Entity('imageCubeC67')
engine.addEntity(imageCubeC67)
imageCubeC67.setParent(_scene)
const transform209 = new Transform({
  position: new Vector3(9.917131423950195, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.3498787879943848)
})
imageCubeC67.addComponentOrReplace(transform209)

const imageCubeC68 = new Entity('imageCubeC68')
engine.addEntity(imageCubeC68)
imageCubeC68.setParent(_scene)
const transform210 = new Transform({
  position: new Vector3(8.038833618164062, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000032186508179, 1, 1.3498797416687012)
})
imageCubeC68.addComponentOrReplace(transform210)

const imageCubeC69 = new Entity('imageCubeC69')
engine.addEntity(imageCubeC69)
imageCubeC69.setParent(_scene)
const transform211 = new Transform({
  position: new Vector3(7.154218673706055, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.349879503250122)
})
imageCubeC69.addComponentOrReplace(transform211)

const imageCubeC70 = new Entity('imageCubeC70')
engine.addEntity(imageCubeC70)
imageCubeC70.setParent(_scene)
const transform212 = new Transform({
  position: new Vector3(6.276124954223633, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.3498785495758057)
})
imageCubeC70.addComponentOrReplace(transform212)

const imageCubeC71 = new Entity('imageCubeC71')
engine.addEntity(imageCubeC71)
imageCubeC71.setParent(_scene)
const transform213 = new Transform({
  position: new Vector3(4.250650405883789, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 1, 1.349879503250122)
})
imageCubeC71.addComponentOrReplace(transform213)

const imageCubeC72 = new Entity('imageCubeC72')
engine.addEntity(imageCubeC72)
imageCubeC72.setParent(_scene)
const transform214 = new Transform({
  position: new Vector3(3.3660354614257812, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 1.349879264831543)
})
imageCubeC72.addComponentOrReplace(transform214)

const imageCubeC73 = new Entity('imageCubeC73')
engine.addEntity(imageCubeC73)
imageCubeC73.setParent(_scene)
const transform215 = new Transform({
  position: new Vector3(2.4879417419433594, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 1.3498783111572266)
})
imageCubeC73.addComponentOrReplace(transform215)

const radioCyberpunk = new Entity('radioCyberpunk')
engine.addEntity(radioCyberpunk)
radioCyberpunk.setParent(_scene)
const transform216 = new Transform({
  position: new Vector3(3.811891794204712, 0.5607730150222778, 14.549994468688965),
  rotation: new Quaternion(1, 7.450579886381092e-8, -8.881782502935358e-15, -1.1920926823449918e-7),
  scale: new Vector3(1.3587324619293213, 1.1274462938308716, 2.6679577827453613)
})
radioCyberpunk.addComponentOrReplace(transform216)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
const transform217 = new Transform({
  position: new Vector3(4.609211444854736, 0.1761990785598755, 15.89996337890625),
  rotation: new Quaternion(0.3333278298377991, -0.6236125230789185, 0.33332788944244385, 0.6236124634742737),
  scale: new Vector3(0.7323540449142456, 0.801763117313385, 0.07920855283737183)
})
wallPlainGlass.addComponentOrReplace(transform217)
const gltfShape3 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
wallPlainGlass.addComponentOrReplace(gltfShape3)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
wallPlainGlass2.addComponentOrReplace(gltfShape3)
const transform218 = new Transform({
  position: new Vector3(0.07199335098266602, 1.9692888259887695, 14.422179222106934),
  rotation: new Quaternion(-0.0004430585540831089, -0.9023821353912354, 0.4309365153312683, -0.0000959513708949089),
  scale: new Vector3(0.9418296813964844, 0.8075641393661499, 0.07873181998729706)
})
wallPlainGlass2.addComponentOrReplace(transform218)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
wallPlainGlass3.addComponentOrReplace(gltfShape3)
const transform219 = new Transform({
  position: new Vector3(1.9488840103149414, 1.9594142436981201, 15.920327186584473),
  rotation: new Quaternion(0.5, -0.5, 0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(0.7420132160186768, 0.46901389956474304, 0.07920855283737183)
})
wallPlainGlass3.addComponentOrReplace(transform219)

const plainText6 = new Entity('plainText6')
engine.addEntity(plainText6)
plainText6.setParent(_scene)
const transform220 = new Transform({
  position: new Vector3(14.441950798034668, 2.8345518112182617, 15.809928894042969),
  rotation: new Quaternion(-6.122317296820877e-15, 1, -1.1920928244535389e-7, 2.9802322387695312e-8),
  scale: new Vector3(1, 1, 1)
})
plainText6.addComponentOrReplace(transform220)

const signpostDirections = new Entity('signpostDirections')
engine.addEntity(signpostDirections)
signpostDirections.setParent(_scene)
const transform221 = new Transform({
  position: new Vector3(14.543895721435547, 16.142839431762695, 12.384310722351074),
  rotation: new Quaternion(6.820316914588152e-15, 0.7855523824691772, -9.364515562992892e-8, -0.6187951564788818),
  scale: new Vector3(0.9999996423721313, 1, 0.9999996423721313)
})
signpostDirections.addComponentOrReplace(transform221)

const verticalPlatform = new Entity('verticalPlatform')
engine.addEntity(verticalPlatform)
verticalPlatform.setParent(_scene)
const transform222 = new Transform({
  position: new Vector3(14.703544616699219, 0, 14.26887321472168),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9126614332199097, 0.13282114267349243, 1.4384448528289795)
})
verticalPlatform.addComponentOrReplace(transform222)

const wallPlainGlass10 = new Entity('wallPlainGlass10')
engine.addEntity(wallPlainGlass10)
wallPlainGlass10.setParent(_scene)
wallPlainGlass10.addComponentOrReplace(gltfShape3)
const transform223 = new Transform({
  position: new Vector3(1.9488840103149414, 10.17551326751709, 15.978593826293945),
  rotation: new Quaternion(0.5, -0.5, 0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(0.757361114025116, 0.46901389956474304, 0.07920855283737183)
})
wallPlainGlass10.addComponentOrReplace(transform223)

const wallPlainGlass11 = new Entity('wallPlainGlass11')
engine.addEntity(wallPlainGlass11)
wallPlainGlass11.setParent(_scene)
wallPlainGlass11.addComponentOrReplace(gltfShape3)
const transform224 = new Transform({
  position: new Vector3(0.07199335098266602, 10.185388565063477, 14.480445861816406),
  rotation: new Quaternion(-0.0004430585540831089, -0.9023821353912354, 0.4309365153312683, -0.0000959513708949089),
  scale: new Vector3(0.9418280720710754, 0.8075641393661499, 0.0787317305803299)
})
wallPlainGlass11.addComponentOrReplace(transform224)

const wallPlainGlass12 = new Entity('wallPlainGlass12')
engine.addEntity(wallPlainGlass12)
wallPlainGlass12.setParent(_scene)
wallPlainGlass12.addComponentOrReplace(gltfShape3)
const transform225 = new Transform({
  position: new Vector3(4.4681477546691895, 8.185996055603027, 15.958230018615723),
  rotation: new Quaternion(0.3064872920513153, -0.637232780456543, 0.3064873218536377, 0.6372327208518982),
  scale: new Vector3(0.7323547005653381, 0.8017641305923462, 0.07920864224433899)
})
wallPlainGlass12.addComponentOrReplace(transform225)

const imageCubeC3 = new Entity('imageCubeC3')
engine.addEntity(imageCubeC3)
imageCubeC3.setParent(_scene)
const transform226 = new Transform({
  position: new Vector3(11.691849708557129, 16.128873825073242, 12.713663101196289),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000003695487976, 1, 1.349877953529358)
})
imageCubeC3.addComponentOrReplace(transform226)

const imageCubeC40 = new Entity('imageCubeC40')
engine.addEntity(imageCubeC40)
imageCubeC40.setParent(_scene)
const transform227 = new Transform({
  position: new Vector3(13.547693252563477, 16.128873825073242, 12.652798652648926),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000032186508179, 1, 1.3498787879943848)
})
imageCubeC40.addComponentOrReplace(transform227)

const imageCubeC41 = new Entity('imageCubeC41')
engine.addEntity(imageCubeC41)
imageCubeC41.setParent(_scene)
const transform228 = new Transform({
  position: new Vector3(14.425786972045898, 16.128873825073242, 12.652798652648926),
  rotation: new Quaternion(-2.4085271740892887e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.000003457069397, 1, 1.3498797416687012)
})
imageCubeC41.addComponentOrReplace(transform228)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform229 = new Transform({
  position: new Vector3(8.163972854614258, 16.95929527282715, 0.000164096214575693),
  rotation: new Quaternion(2.45665812725112e-15, -1, 1.1920928244535389e-7, -7.450580596923828e-9),
  scale: new Vector3(8.737273216247559, 9.4327974319458, 1.0000001192092896)
})
plainText.addComponentOrReplace(transform229)

const wallPlainGlass8 = new Entity('wallPlainGlass8')
engine.addEntity(wallPlainGlass8)
wallPlainGlass8.setParent(_scene)
wallPlainGlass8.addComponentOrReplace(gltfShape3)
const transform230 = new Transform({
  position: new Vector3(0.07199335098266602, 5.9458489418029785, 14.422179222106934),
  rotation: new Quaternion(-0.0004430585540831089, -0.9023821353912354, 0.4309365153312683, -0.0000959513708949089),
  scale: new Vector3(0.9418291449546814, 0.8075641393661499, 0.07873177528381348)
})
wallPlainGlass8.addComponentOrReplace(transform230)

const wallPlainGlass13 = new Entity('wallPlainGlass13')
engine.addEntity(wallPlainGlass13)
wallPlainGlass13.setParent(_scene)
wallPlainGlass13.addComponentOrReplace(gltfShape3)
const transform231 = new Transform({
  position: new Vector3(1.9488840103149414, 5.935974597930908, 15.920327186584473),
  rotation: new Quaternion(0.5, -0.5, 0.5000000596046448, 0.4999999403953552),
  scale: new Vector3(0.7487815022468567, 0.46901389956474304, 0.07920855283737183)
})
wallPlainGlass13.addComponentOrReplace(transform231)

const wallPlainGlass14 = new Entity('wallPlainGlass14')
engine.addEntity(wallPlainGlass14)
wallPlainGlass14.setParent(_scene)
wallPlainGlass14.addComponentOrReplace(gltfShape3)
const transform232 = new Transform({
  position: new Vector3(4.609211444854736, 4.152759075164795, 15.89996337890625),
  rotation: new Quaternion(0.3333278298377991, -0.6236125230789185, 0.33332788944244385, 0.6236124634742737),
  scale: new Vector3(0.7323540449142456, 0.801763117313385, 0.07920855283737183)
})
wallPlainGlass14.addComponentOrReplace(transform232)

const ropeLight = new Entity('ropeLight')
engine.addEntity(ropeLight)
ropeLight.setParent(_scene)
const transform233 = new Transform({
  position: new Vector3(8.055947303771973, 0, 8.455784797668457),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ropeLight.addComponentOrReplace(transform233)

const ropeLight2 = new Entity('ropeLight2')
engine.addEntity(ropeLight2)
ropeLight2.setParent(_scene)
const transform234 = new Transform({
  position: new Vector3(8.055947303771973, 0, 8.455784797668457),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.000000238418579, 1, 1.000000238418579)
})
ropeLight2.addComponentOrReplace(transform234)

const clickArea = new Entity('clickArea')
engine.addEntity(clickArea)
clickArea.setParent(_scene)
const transform235 = new Transform({
  position: new Vector3(14.440803527832031, 0.5836243629455566, 15.455707550048828),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 0.28335729241371155)
})
clickArea.addComponentOrReplace(transform235)

const spotlightStripLight = new Entity('spotlightStripLight')
engine.addEntity(spotlightStripLight)
spotlightStripLight.setParent(_scene)
const transform236 = new Transform({
  position: new Vector3(4.007336616516113, 15.809417724609375, 0.6177804470062256),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.8310465812683105, 1, 2.6922028064727783)
})
spotlightStripLight.addComponentOrReplace(transform236)

const spotlightStripLight2 = new Entity('spotlightStripLight2')
engine.addEntity(spotlightStripLight2)
spotlightStripLight2.setParent(_scene)
const transform237 = new Transform({
  position: new Vector3(4.007336616516113, 15.809417724609375, 1.8493874073028564),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.831047534942627, 1, 2.6922028064727783)
})
spotlightStripLight2.addComponentOrReplace(transform237)

const spotlightStripLight3 = new Entity('spotlightStripLight3')
engine.addEntity(spotlightStripLight3)
spotlightStripLight3.setParent(_scene)
const transform238 = new Transform({
  position: new Vector3(10.76085090637207, 15.809417724609375, 0.6177804470062256),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.831047534942627, 1, 2.6922030448913574)
})
spotlightStripLight3.addComponentOrReplace(transform238)

const spotlightStripLight4 = new Entity('spotlightStripLight4')
engine.addEntity(spotlightStripLight4)
spotlightStripLight4.setParent(_scene)
const transform239 = new Transform({
  position: new Vector3(10.76085090637207, 15.809417724609375, 1.8493874073028564),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.8310484886169434, 1, 2.6922035217285156)
})
spotlightStripLight4.addComponentOrReplace(transform239)

const spotlightStripLight5 = new Entity('spotlightStripLight5')
engine.addEntity(spotlightStripLight5)
spotlightStripLight5.setParent(_scene)
const transform240 = new Transform({
  position: new Vector3(4.568098545074463, 17.501203536987305, 1.8493874073028564),
  rotation: new Quaternion(-0.5, 0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(3.8310489654541016, 1.0000003576278687, 1.2014753818511963)
})
spotlightStripLight5.addComponentOrReplace(transform240)

const spotlightStripLight6 = new Entity('spotlightStripLight6')
engine.addEntity(spotlightStripLight6)
spotlightStripLight6.setParent(_scene)
const transform241 = new Transform({
  position: new Vector3(4.568098545074463, 17.501203536987305, 0.5754129886627197),
  rotation: new Quaternion(-0.5, 0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(3.8310489654541016, 1.0000003576278687, 1.2014753818511963)
})
spotlightStripLight6.addComponentOrReplace(transform241)

const spotlightStripLight7 = new Entity('spotlightStripLight7')
engine.addEntity(spotlightStripLight7)
spotlightStripLight7.setParent(_scene)
const transform242 = new Transform({
  position: new Vector3(11.493077278137207, 17.501203536987305, 0.3294488787651062),
  rotation: new Quaternion(-0.48001325130462646, -0.5192180871963501, -0.5192179083824158, 0.4800131916999817),
  scale: new Vector3(3.8310446739196777, 1.0000005960464478, 1.2014744281768799)
})
spotlightStripLight7.addComponentOrReplace(transform242)

const spotlightStripLight8 = new Entity('spotlightStripLight8')
engine.addEntity(spotlightStripLight8)
spotlightStripLight8.setParent(_scene)
const transform243 = new Transform({
  position: new Vector3(11.476956367492676, 17.501203536987305, 1.5737097263336182),
  rotation: new Quaternion(-0.48001325130462646, -0.5192180871963501, -0.5192179083824158, 0.4800131916999817),
  scale: new Vector3(3.8310482501983643, 1.000000238418579, 1.2014744281768799)
})
spotlightStripLight8.addComponentOrReplace(transform243)

const spotlightStripLight9 = new Entity('spotlightStripLight9')
engine.addEntity(spotlightStripLight9)
spotlightStripLight9.setParent(_scene)
const transform244 = new Transform({
  position: new Vector3(4.007336616516113, 17.465612411499023, 3.9719035625457764),
  rotation: new Quaternion(-0.4166937470436096, 0.5712847709655762, -0.4166937470436096, 0.5712848901748657),
  scale: new Vector3(3.831054449081421, 1.0000005960464478, 2.6922054290771484)
})
spotlightStripLight9.addComponentOrReplace(transform244)

const spotlightStripLight10 = new Entity('spotlightStripLight10')
engine.addEntity(spotlightStripLight10)
spotlightStripLight10.setParent(_scene)
const transform245 = new Transform({
  position: new Vector3(10.76085090637207, 17.465612411499023, 3.971903085708618),
  rotation: new Quaternion(-0.4166937470436096, 0.5712847709655762, -0.4166937470436096, 0.5712848901748657),
  scale: new Vector3(3.8310554027557373, 1.0000005960464478, 2.6922056674957275)
})
spotlightStripLight10.addComponentOrReplace(transform245)

const spotlightStripLight11 = new Entity('spotlightStripLight11')
engine.addEntity(spotlightStripLight11)
spotlightStripLight11.setParent(_scene)
const transform246 = new Transform({
  position: new Vector3(4.568098545074463, 17.501203536987305, 3.1562769412994385),
  rotation: new Quaternion(-0.5, 0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(3.8310489654541016, 1.0000003576278687, 1.2014753818511963)
})
spotlightStripLight11.addComponentOrReplace(transform246)

const spotlightStripLight12 = new Entity('spotlightStripLight12')
engine.addEntity(spotlightStripLight12)
spotlightStripLight12.setParent(_scene)
const transform247 = new Transform({
  position: new Vector3(4.007336616516113, 15.809417724609375, 3.1562769412994385),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.8310494422912598, 1, 2.6922037601470947)
})
spotlightStripLight12.addComponentOrReplace(transform247)

const spotlightStripLight13 = new Entity('spotlightStripLight13')
engine.addEntity(spotlightStripLight13)
spotlightStripLight13.setParent(_scene)
const transform248 = new Transform({
  position: new Vector3(10.76085090637207, 15.809417724609375, 3.1562769412994385),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.831050395965576, 1, 2.692204475402832)
})
spotlightStripLight13.addComponentOrReplace(transform248)

const spotlightStripLight14 = new Entity('spotlightStripLight14')
engine.addEntity(spotlightStripLight14)
spotlightStripLight14.setParent(_scene)
const transform249 = new Transform({
  position: new Vector3(11.476956367492676, 17.501203536987305, 2.8805992603302),
  rotation: new Quaternion(-0.48001325130462646, -0.5192180871963501, -0.5192179083824158, 0.4800131916999817),
  scale: new Vector3(3.8310487270355225, 1.0000004768371582, 1.2014744281768799)
})
spotlightStripLight14.addComponentOrReplace(transform249)

const triggerTileSquare = new Entity('triggerTileSquare')
engine.addEntity(triggerTileSquare)
triggerTileSquare.setParent(_scene)
const transform250 = new Transform({
  position: new Vector3(7.793424606323242, 16.16021728515625, 1.8074619770050049),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.771422386169434, 1.9349712133407593, 1.5736931562423706)
})
triggerTileSquare.addComponentOrReplace(transform250)

const redNeonTube30 = new Entity('redNeonTube30')
engine.addEntity(redNeonTube30)
redNeonTube30.setParent(_scene)
redNeonTube30.addComponentOrReplace(gltfShape)
const transform251 = new Transform({
  position: new Vector3(8.20470905303955, 16.380830764770508, 3.4041748046875),
  rotation: new Quaternion(0.5002247095108032, 0.5002247095108032, 0.4997752606868744, 0.49977514147758484),
  scale: new Vector3(0.2779654264450073, -1.0000079870224, 101.54225158691406)
})
redNeonTube30.addComponentOrReplace(transform251)

const tablet = new Entity('tablet')
engine.addEntity(tablet)
tablet.setParent(_scene)
const transform252 = new Transform({
  position: new Vector3(2, 1.7673053741455078, 14),
  rotation: new Quaternion(-0.5555703639984131, 2.988698579662859e-16, 6.622912707143769e-8, 0.8314695358276367),
  scale: new Vector3(1, 1, 1)
})
tablet.addComponentOrReplace(transform252)

const redNeonTube12 = new Entity('redNeonTube12')
engine.addEntity(redNeonTube12)
redNeonTube12.setParent(_scene)
redNeonTube12.addComponentOrReplace(gltfShape)
const transform253 = new Transform({
  position: new Vector3(14.779011726379395, 16.380830764770508, 9.2110595703125),
  rotation: new Quaternion(-0.00031778213451616466, -0.00031793114612810314, -0.7071068286895752, -0.7071066498756409),
  scale: new Vector3(0.2779657244682312, -1.0000083446502686, 87.66127014160156)
})
redNeonTube12.addComponentOrReplace(transform253)

const redNeonTube11 = new Entity('redNeonTube11')
engine.addEntity(redNeonTube11)
redNeonTube11.setParent(_scene)
redNeonTube11.addComponentOrReplace(gltfShape)
const transform254 = new Transform({
  position: new Vector3(1.1729881763458252, 16.380830764770508, 9.2110595703125),
  rotation: new Quaternion(-0.00031778213451616466, -0.00031793114612810314, -0.7071068286895752, -0.7071066498756409),
  scale: new Vector3(0.277965784072876, -1.000008463859558, 87.66126251220703)
})
redNeonTube11.addComponentOrReplace(transform254)

const wallPlainBlack = new Entity('wallPlainBlack')
engine.addEntity(wallPlainBlack)
wallPlainBlack.setParent(_scene)
const transform255 = new Transform({
  position: new Vector3(15.988273620605469, 0, 15.856740951538086),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.9600324630737305, 4.0410895347595215, 0.008951783180236816)
})
wallPlainBlack.addComponentOrReplace(transform255)
const gltfShape4 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
wallPlainBlack.addComponentOrReplace(gltfShape4)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape5 = new GLTFShape("62b9b3e0-f0d9-4693-b8ee-fee3c20ca29c/FloorBasePebbles_01/FloorBasePebbles_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
entity.addComponentOrReplace(gltfShape5)
const transform256 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform256)

const wallPlainBlack2 = new Entity('wallPlainBlack2')
engine.addEntity(wallPlainBlack2)
wallPlainBlack2.setParent(_scene)
wallPlainBlack2.addComponentOrReplace(gltfShape4)
const transform257 = new Transform({
  position: new Vector3(16, 0.027001380920410156, 0),
  rotation: new Quaternion(0.7070469260215759, -1.0690224818028703e-16, -8.428657594095057e-8, 0.7071666717529297),
  scale: new Vector3(7.991976261138916, 3.991537094116211, 0.005896833725273609)
})
wallPlainBlack2.addComponentOrReplace(transform257)

const wallPlainBlack3 = new Entity('wallPlainBlack3')
engine.addEntity(wallPlainBlack3)
wallPlainBlack3.setParent(_scene)
wallPlainBlack3.addComponentOrReplace(gltfShape4)
const transform258 = new Transform({
  position: new Vector3(15.854537963867188, 0, 15.948465347290039),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(7.960044860839844, 4.897975444793701, 0.008951795287430286)
})
wallPlainBlack3.addComponentOrReplace(transform258)

const wallPlainBlack4 = new Entity('wallPlainBlack4')
engine.addEntity(wallPlainBlack4)
wallPlainBlack4.setParent(_scene)
wallPlainBlack4.addComponentOrReplace(gltfShape4)
const transform259 = new Transform({
  position: new Vector3(0.17310616374015808, 0, 15.948465347290039),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(7.960062026977539, 4.894866943359375, 0.00895181205123663)
})
wallPlainBlack4.addComponentOrReplace(transform259)

const ropeLight3 = new Entity('ropeLight3')
engine.addEntity(ropeLight3)
ropeLight3.setParent(_scene)
const transform260 = new Transform({
  position: new Vector3(15.826189041137695, 3.9757328033447266, 7.880542755126953),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.3182239532470703, 1, 1.0000016689300537)
})
ropeLight3.addComponentOrReplace(transform260)

const ropeLight4 = new Entity('ropeLight4')
engine.addEntity(ropeLight4)
ropeLight4.setParent(_scene)
const transform261 = new Transform({
  position: new Vector3(15.7756986618042, 0.011042594909667969, 8.057684898376465),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.3232512474060059, 1, 1.0000014305114746)
})
ropeLight4.addComponentOrReplace(transform261)

const ropeLight5 = new Entity('ropeLight5')
engine.addEntity(ropeLight5)
ropeLight5.setParent(_scene)
const transform262 = new Transform({
  position: new Vector3(0.2159409523010254, 0.011042594909667969, 8.057684898376465),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.3232519626617432, 1, 1.0000016689300537)
})
ropeLight5.addComponentOrReplace(transform262)

const ropeLight6 = new Entity('ropeLight6')
engine.addEntity(ropeLight6)
ropeLight6.setParent(_scene)
const transform263 = new Transform({
  position: new Vector3(8.010736465454102, 0.011042594909667969, 15.764843940734863),
  rotation: new Quaternion(1.5675276425182808e-14, 0.001014113426208496, -1.2087895961965245e-10, 0.9999995231628418),
  scale: new Vector3(1.3232526779174805, 1, 1.0000019073486328)
})
ropeLight6.addComponentOrReplace(transform263)

const wallPlainBlack5 = new Entity('wallPlainBlack5')
engine.addEntity(wallPlainBlack5)
wallPlainBlack5.setParent(_scene)
wallPlainBlack5.addComponentOrReplace(gltfShape4)
const transform264 = new Transform({
  position: new Vector3(15.947586059570312, 0, 0.2359142303466797),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.133108139038086, 4.675718307495117, 0.008951783180236816)
})
wallPlainBlack5.addComponentOrReplace(transform264)

const wallPlainBlack6 = new Entity('wallPlainBlack6')
engine.addEntity(wallPlainBlack6)
wallPlainBlack6.setParent(_scene)
wallPlainBlack6.addComponentOrReplace(gltfShape4)
const transform265 = new Transform({
  position: new Vector3(6.55967903137207, 0, 0.2359153777360916),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.2835583686828613, 4.0410895347595215, 0.008951783180236816)
})
wallPlainBlack6.addComponentOrReplace(transform265)

const blockFloorLight = new Entity('blockFloorLight')
engine.addEntity(blockFloorLight)
blockFloorLight.setParent(_scene)
const transform266 = new Transform({
  position: new Vector3(15.709817886352539, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 15.622431755065918, 1)
})
blockFloorLight.addComponentOrReplace(transform266)

const blockFloorLight2 = new Entity('blockFloorLight2')
engine.addEntity(blockFloorLight2)
blockFloorLight2.setParent(_scene)
const transform267 = new Transform({
  position: new Vector3(0.5096994638442993, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 15.622431755065918, 1)
})
blockFloorLight2.addComponentOrReplace(transform267)

const ropeLight7 = new Entity('ropeLight7')
engine.addEntity(ropeLight7)
ropeLight7.setParent(_scene)
const transform268 = new Transform({
  position: new Vector3(15.826189041137695, 7.891057968139648, 7.880542755126953),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.3182246685028076, 1, 1.0000019073486328)
})
ropeLight7.addComponentOrReplace(transform268)

const ropeLight8 = new Entity('ropeLight8')
engine.addEntity(ropeLight8)
ropeLight8.setParent(_scene)
const transform269 = new Transform({
  position: new Vector3(15.826189041137695, 12.2228422164917, 7.880542755126953),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.3182257413864136, 1, 1.0000022649765015)
})
ropeLight8.addComponentOrReplace(transform269)

const ropeLight9 = new Entity('ropeLight9')
engine.addEntity(ropeLight9)
ropeLight9.setParent(_scene)
const transform270 = new Transform({
  position: new Vector3(0.20187899470329285, 3.9757328033447266, 7.880542755126953),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.318225383758545, 1, 1.000002145767212)
})
ropeLight9.addComponentOrReplace(transform270)

const ropeLight10 = new Entity('ropeLight10')
engine.addEntity(ropeLight10)
ropeLight10.setParent(_scene)
const transform271 = new Transform({
  position: new Vector3(0.20187899470329285, 7.891057968139648, 7.880542755126953),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.3182260990142822, 1, 1.000002384185791)
})
ropeLight10.addComponentOrReplace(transform271)

const ropeLight11 = new Entity('ropeLight11')
engine.addEntity(ropeLight11)
ropeLight11.setParent(_scene)
const transform272 = new Transform({
  position: new Vector3(0.20187899470329285, 12.2228422164917, 7.880542755126953),
  rotation: new Quaternion(4.822297865933886e-17, -0.7067949771881104, 8.425651998322792e-8, 0.7074185013771057),
  scale: new Vector3(1.3182271718978882, 1, 1.0000027418136597)
})
ropeLight11.addComponentOrReplace(transform272)

const blockFloorLight3 = new Entity('blockFloorLight3')
engine.addEntity(blockFloorLight3)
blockFloorLight3.setParent(_scene)
const transform273 = new Transform({
  position: new Vector3(0.509699821472168, 0, 0.35021543502807617),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 15.622431755065918, 1)
})
blockFloorLight3.addComponentOrReplace(transform273)

const ropeLight12 = new Entity('ropeLight12')
engine.addEntity(ropeLight12)
ropeLight12.setParent(_scene)
const transform274 = new Transform({
  position: new Vector3(8.010736465454102, 4.023251533508301, 15.764843940734863),
  rotation: new Quaternion(1.5675276425182808e-14, 0.001014113426208496, -1.2087895961965245e-10, 0.9999995231628418),
  scale: new Vector3(1.3232526779174805, 1, 1.0000019073486328)
})
ropeLight12.addComponentOrReplace(transform274)

const ropeLight13 = new Entity('ropeLight13')
engine.addEntity(ropeLight13)
ropeLight13.setParent(_scene)
const transform275 = new Transform({
  position: new Vector3(8.010736465454102, 7.9348530769348145, 15.764843940734863),
  rotation: new Quaternion(1.5675276425182808e-14, 0.001014113426208496, -1.2087895961965245e-10, 0.9999995231628418),
  scale: new Vector3(1.3232526779174805, 1, 1.0000019073486328)
})
ropeLight13.addComponentOrReplace(transform275)

const ropeLight14 = new Entity('ropeLight14')
engine.addEntity(ropeLight14)
ropeLight14.setParent(_scene)
const transform276 = new Transform({
  position: new Vector3(8.010736465454102, 12.224365234375, 15.764843940734863),
  rotation: new Quaternion(1.5675276425182808e-14, 0.001014113426208496, -1.2087895961965245e-10, 0.9999995231628418),
  scale: new Vector3(1.3232526779174805, 1, 1.0000019073486328)
})
ropeLight14.addComponentOrReplace(transform276)

const twitterLink = new Entity('twitterLink')
engine.addEntity(twitterLink)
twitterLink.setParent(_scene)
const transform277 = new Transform({
  position: new Vector3(8.080353736877441, 0, 8.359882354736328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
twitterLink.addComponentOrReplace(transform277)

const galleryInfoGlass = new Entity('galleryInfoGlass')
engine.addEntity(galleryInfoGlass)
galleryInfoGlass.setParent(_scene)
const transform278 = new Transform({
  position: new Vector3(9.118293762207031, 4.144164562225342, 0.5810461044311523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryInfoGlass.addComponentOrReplace(transform278)

const galleryInfoGlass2 = new Entity('galleryInfoGlass2')
engine.addEntity(galleryInfoGlass2)
galleryInfoGlass2.setParent(_scene)
const transform279 = new Transform({
  position: new Vector3(9.118293762207031, 8.14279842376709, 0.5810461044311523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryInfoGlass2.addComponentOrReplace(transform279)

const galleryInfoGlass3 = new Entity('galleryInfoGlass3')
engine.addEntity(galleryInfoGlass3)
galleryInfoGlass3.setParent(_scene)
const transform280 = new Transform({
  position: new Vector3(9.118293762207031, 12.170638084411621, 0.5810461044311523),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryInfoGlass3.addComponentOrReplace(transform280)

const blockFloorLight4 = new Entity('blockFloorLight4')
engine.addEntity(blockFloorLight4)
blockFloorLight4.setParent(_scene)
const transform281 = new Transform({
  position: new Vector3(15.709817886352539, 0, 0.31076622009277344),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 15.622431755065918, 1)
})
blockFloorLight4.addComponentOrReplace(transform281)

const triggerTileSciFi = new Entity('triggerTileSciFi')
engine.addEntity(triggerTileSciFi)
triggerTileSciFi.setParent(_scene)
const transform282 = new Transform({
  position: new Vector3(8, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
triggerTileSciFi.addComponentOrReplace(transform282)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
const script10 = new Script10()
const script11 = new Script11()
const script12 = new Script12()
const script13 = new Script13()
const script14 = new Script14()
const script15 = new Script15()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script10.init(options)
script11.init(options)
script12.init(options)
script13.init(options)
script14.init(options)
script15.init(options)
script1.spawn(plainText3, {"text":"HEARTBEAT","font":"SF_Heavy","color":"#FF0000"}, createChannel(channelId, plainText3, channelBus))
script1.spawn(plainText4, {"text":"OF SOCIETY","font":"SF_Heavy","color":"#00FF00"}, createChannel(channelId, plainText4, channelBus))
script1.spawn(plainText2, {"text":"IS THE","font":"SF_Heavy","color":"#FF0000"}, createChannel(channelId, plainText2, channelBus))
script2.spawn(nftPictureFrame, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script2.spawn(nftPictureFrame2, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script2.spawn(nftPictureFrame7, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script2.spawn(nftPictureFrame8, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script2.spawn(nftPictureFrame9, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script2.spawn(nftPictureFrame10, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script2.spawn(nftPictureFrame11, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame11, channelBus))
script2.spawn(nftPictureFrame12, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame12, channelBus))
script2.spawn(nftPictureFrame13, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame13, channelBus))
script2.spawn(nftPictureFrame14, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script2.spawn(nftPictureFrame15, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame15, channelBus))
script2.spawn(nftPictureFrame16, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame16, channelBus))
script2.spawn(nftPictureFrame17, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame17, channelBus))
script2.spawn(nftPictureFrame18, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame18, channelBus))
script2.spawn(nftPictureFrame19, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame19, channelBus))
script2.spawn(nftPictureFrame20, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame20, channelBus))
script2.spawn(nftPictureFrame21, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame21, channelBus))
script2.spawn(nftPictureFrame22, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame22, channelBus))
script2.spawn(nftPictureFrame23, {"id":"141577","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame23, channelBus))
script2.spawn(nftPictureFrame24, {"id":"141577","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame24, channelBus))
script2.spawn(nftPictureFrame25, {"id":"141577","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame25, channelBus))
script2.spawn(nftPictureFrame26, {"id":"141577","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame26, channelBus))
script2.spawn(nftPictureFrame27, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame27, channelBus))
script2.spawn(nftPictureFrame28, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame28, channelBus))
script2.spawn(nftPictureFrame29, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame29, channelBus))
script2.spawn(nftPictureFrame30, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame30, channelBus))
script2.spawn(nftPictureFrame31, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame31, channelBus))
script2.spawn(nftPictureFrame32, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame32, channelBus))
script2.spawn(nftPictureFrame33, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame33, channelBus))
script2.spawn(nftPictureFrame34, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame34, channelBus))
script2.spawn(nftPictureFrame35, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame35, channelBus))
script2.spawn(nftPictureFrame36, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame36, channelBus))
script2.spawn(nftPictureFrame37, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame37, channelBus))
script2.spawn(nftPictureFrame38, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame38, channelBus))
script2.spawn(nftPictureFrame39, {"id":"141590","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame39, channelBus))
script2.spawn(nftPictureFrame40, {"id":"147259","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame40, channelBus))
script2.spawn(nftPictureFrame41, {"id":"141590","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame41, channelBus))
script2.spawn(nftPictureFrame42, {"id":"147259","contract":"0xd07dc4262bcdbf85190c01c996b4c06a461d2430","style":"Baroque_Ornament","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame42, channelBus))
script2.spawn(nftPictureFrame43, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame43, channelBus))
script2.spawn(nftPictureFrame44, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame44, channelBus))
script2.spawn(nftPictureFrame45, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame45, channelBus))
script2.spawn(nftPictureFrame46, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame46, channelBus))
script2.spawn(nftPictureFrame47, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame47, channelBus))
script2.spawn(nftPictureFrame48, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame48, channelBus))
script2.spawn(nftPictureFrame49, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame49, channelBus))
script2.spawn(nftPictureFrame50, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame50, channelBus))
script2.spawn(nftPictureFrame51, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame51, channelBus))
script2.spawn(nftPictureFrame52, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame52, channelBus))
script2.spawn(nftPictureFrame53, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame53, channelBus))
script2.spawn(nftPictureFrame54, {"id":"558536","contract":"0x06012c8cf97BEaD5deAe237070F9587f8E7A266d","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame54, channelBus))
script2.spawn(nftPictureFrame55, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame55, channelBus))
script2.spawn(nftPictureFrame56, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame56, channelBus))
script2.spawn(nftPictureFrame57, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame57, channelBus))
script2.spawn(nftPictureFrame58, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame58, channelBus))
script2.spawn(nftPictureFrame59, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame59, channelBus))
script2.spawn(nftPictureFrame60, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame60, channelBus))
script2.spawn(nftPictureFrame61, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame61, channelBus))
script2.spawn(nftPictureFrame62, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame62, channelBus))
script2.spawn(nftPictureFrame63, {"id":"1","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame63, channelBus))
script2.spawn(nftPictureFrame64, {"id":"3","contract":"0xeba35be940698c44f1ccfe57da0a13af549038df","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame64, channelBus))
script1.spawn(plainText5, {"text":"THE STAGE","font":"SF_Heavy","color":"#FF0000"}, createChannel(channelId, plainText5, channelBus))
script3.spawn(imageCubeC2, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC2, channelBus))
script3.spawn(imageCubeC, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC, channelBus))
script3.spawn(imageCubeC4, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC4, channelBus))
script3.spawn(imageCubeC5, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC5, channelBus))
script3.spawn(imageCubeC6, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC6, channelBus))
script3.spawn(imageCubeC7, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC7, channelBus))
script3.spawn(imageCubeC8, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC8, channelBus))
script3.spawn(imageCubeC9, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC9, channelBus))
script3.spawn(imageCubeC10, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC10, channelBus))
script3.spawn(imageCubeC11, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC11, channelBus))
script3.spawn(imageCubeC12, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC12, channelBus))
script3.spawn(imageCubeC13, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC13, channelBus))
script3.spawn(imageCubeC14, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC14, channelBus))
script3.spawn(imageCubeC15, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC15, channelBus))
script3.spawn(imageCubeC16, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC16, channelBus))
script3.spawn(imageCubeC17, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC17, channelBus))
script3.spawn(imageCubeC18, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC18, channelBus))
script3.spawn(imageCubeC19, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC19, channelBus))
script3.spawn(imageCubeC20, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC20, channelBus))
script3.spawn(imageCubeC21, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC21, channelBus))
script3.spawn(imageCubeC22, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC22, channelBus))
script3.spawn(imageCubeC23, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC23, channelBus))
script3.spawn(imageCubeC24, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC24, channelBus))
script3.spawn(imageCubeC25, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC25, channelBus))
script3.spawn(imageCubeC26, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC26, channelBus))
script3.spawn(imageCubeC27, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC27, channelBus))
script3.spawn(imageCubeC28, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC28, channelBus))
script3.spawn(imageCubeC29, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC29, channelBus))
script3.spawn(imageCubeC30, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC30, channelBus))
script3.spawn(imageCubeC31, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC31, channelBus))
script3.spawn(imageCubeC32, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC32, channelBus))
script3.spawn(imageCubeC33, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC33, channelBus))
script3.spawn(imageCubeC34, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC34, channelBus))
script3.spawn(imageCubeC35, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC35, channelBus))
script3.spawn(imageCubeC36, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC36, channelBus))
script3.spawn(imageCubeC37, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC37, channelBus))
script3.spawn(imageCubeC38, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC38, channelBus))
script3.spawn(imageCubeC39, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC39, channelBus))
script3.spawn(imageCubeC42, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC42, channelBus))
script3.spawn(imageCubeC43, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC43, channelBus))
script3.spawn(imageCubeC45, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC45, channelBus))
script3.spawn(imageCubeC46, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC46, channelBus))
script3.spawn(imageCubeC48, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC48, channelBus))
script3.spawn(imageCubeC49, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC49, channelBus))
script3.spawn(imageCubeC51, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC51, channelBus))
script3.spawn(imageCubeC52, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC52, channelBus))
script3.spawn(imageCubeC53, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC53, channelBus))
script3.spawn(imageCubeC54, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC54, channelBus))
script3.spawn(imageCubeC55, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC55, channelBus))
script3.spawn(imageCubeC56, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC56, channelBus))
script3.spawn(imageCubeC57, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC57, channelBus))
script3.spawn(imageCubeC58, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC58, channelBus))
script3.spawn(imageCubeC59, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC59, channelBus))
script3.spawn(imageCubeC60, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC60, channelBus))
script3.spawn(imageCubeC61, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC61, channelBus))
script3.spawn(imageCubeC66, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC66, channelBus))
script3.spawn(imageCubeC67, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC67, channelBus))
script3.spawn(imageCubeC68, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC68, channelBus))
script3.spawn(imageCubeC69, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC69, channelBus))
script3.spawn(imageCubeC70, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC70, channelBus))
script3.spawn(imageCubeC71, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC71, channelBus))
script3.spawn(imageCubeC72, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC72, channelBus))
script3.spawn(imageCubeC73, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC73, channelBus))
script4.spawn(radioCyberpunk, {"startOn":false,"volume":1,"onClickText":"THEME TIME RADIO HOUR [EP - TIME]","onClick":[{"entityName":"radioCyberpunk","actionId":"toggle","values":{}}],"customStation":"https://ipfs.io/ipfs/QmRKvoMxjEPB13E4pSct7bnLniMbTWaXa7CvUofRXBTh84?filename=Theme%20Time%20Radio%20Hour%20015%20-%20Episode%2015_%20Eyes.mp3"}, createChannel(channelId, radioCyberpunk, channelBus))
script1.spawn(plainText6, {"text":"THEATER\nELEVATOR","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText6, channelBus))
script5.spawn(signpostDirections, {"textTop":"AUDIENCE","textLower":"PERFORMERS","fontSize":20}, createChannel(channelId, signpostDirections, channelBus))
script6.spawn(verticalPlatform, {"distance":120,"speed":6,"autoStart":false,"onReachEnd":[{"entityName":"verticalPlatform","actionId":"goToStart","values":{}}],"onReachStart":[]}, createChannel(channelId, verticalPlatform, channelBus))
script3.spawn(imageCubeC3, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC3, channelBus))
script3.spawn(imageCubeC40, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC40, channelBus))
script3.spawn(imageCubeC41, {"image":"https://ipfs.io/ipfs/QmZCkwNXjecrLwAUZz5FGkfAcrDHYmB12wsAftnMtnb8nM?filename=NFT%20000%20.jpg"}, createChannel(channelId, imageCubeC41, channelBus))
script1.spawn(plainText, {"text":"POETRY","font":"SF_Heavy","color":"#FF0000"}, createChannel(channelId, plainText, channelBus))
script7.spawn(ropeLight, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight, channelBus))
script7.spawn(ropeLight2, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight2, channelBus))
script8.spawn(clickArea, {"enabled":true,"onClickText":"POETRY THEATER","button":"POINTER","onClick":[]}, createChannel(channelId, clickArea, channelBus))
script9.spawn(spotlightStripLight, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight, channelBus))
script9.spawn(spotlightStripLight2, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight2, channelBus))
script9.spawn(spotlightStripLight3, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight3, channelBus))
script9.spawn(spotlightStripLight4, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight4, channelBus))
script9.spawn(spotlightStripLight5, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight5, channelBus))
script9.spawn(spotlightStripLight6, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight6, channelBus))
script9.spawn(spotlightStripLight7, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight7, channelBus))
script9.spawn(spotlightStripLight8, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight8, channelBus))
script9.spawn(spotlightStripLight9, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight9, channelBus))
script9.spawn(spotlightStripLight10, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight10, channelBus))
script9.spawn(spotlightStripLight11, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight11, channelBus))
script9.spawn(spotlightStripLight12, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight12, channelBus))
script9.spawn(spotlightStripLight13, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight13, channelBus))
script9.spawn(spotlightStripLight14, {"startOn":false,"clickable":true}, createChannel(channelId, spotlightStripLight14, channelBus))
script10.spawn(triggerTileSquare, {"enabled":true,"onEnter":[{"entityName":"spotlightStripLight","actionId":"activate","values":{}},{"entityName":"spotlightStripLight2","actionId":"activate","values":{}},{"entityName":"spotlightStripLight3","actionId":"activate","values":{}},{"entityName":"spotlightStripLight4","actionId":"activate","values":{}},{"entityName":"spotlightStripLight5","actionId":"activate","values":{}},{"entityName":"spotlightStripLight6","actionId":"activate","values":{}},{"entityName":"spotlightStripLight7","actionId":"activate","values":{}},{"entityName":"spotlightStripLight9","actionId":"activate","values":{}},{"entityName":"spotlightStripLight10","actionId":"activate","values":{}},{"entityName":"spotlightStripLight11","actionId":"activate","values":{}},{"entityName":"spotlightStripLight12","actionId":"activate","values":{}},{"entityName":"spotlightStripLight13","actionId":"activate","values":{}}]}, createChannel(channelId, triggerTileSquare, channelBus))
script11.spawn(tablet, {"text":"Some text","fontSize":36}, createChannel(channelId, tablet, channelBus))
script7.spawn(ropeLight3, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight3, channelBus))
script7.spawn(ropeLight4, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight4, channelBus))
script7.spawn(ropeLight5, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight5, channelBus))
script7.spawn(ropeLight6, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight6, channelBus))
script12.spawn(blockFloorLight, {"startOn":false,"clickable":true}, createChannel(channelId, blockFloorLight, channelBus))
script12.spawn(blockFloorLight2, {"startOn":false,"clickable":true}, createChannel(channelId, blockFloorLight2, channelBus))
script7.spawn(ropeLight7, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight7, channelBus))
script7.spawn(ropeLight8, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight8, channelBus))
script7.spawn(ropeLight9, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight9, channelBus))
script7.spawn(ropeLight10, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight10, channelBus))
script7.spawn(ropeLight11, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight11, channelBus))
script12.spawn(blockFloorLight3, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight3, channelBus))
script7.spawn(ropeLight12, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight12, channelBus))
script7.spawn(ropeLight13, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight13, channelBus))
script7.spawn(ropeLight14, {"startOn":true,"clickable":true}, createChannel(channelId, ropeLight14, channelBus))
script13.spawn(twitterLink, {"url":"nfteye","bnw":true,"name":"POETIC ARTIFICIAL INTELLIGENCE"}, createChannel(channelId, twitterLink, channelBus))
script14.spawn(galleryInfoGlass, {"text":"FLOOR 1\n@ARTIST\n#PROJECT\n^PRICE","fontSize":7,"font":"SF_Heavy","color":"#000000"}, createChannel(channelId, galleryInfoGlass, channelBus))
script14.spawn(galleryInfoGlass2, {"text":"FLOOR 2\n@ARTIST\n#PROJECT\n^PRICE","fontSize":7,"font":"SF_Heavy","color":"#000000"}, createChannel(channelId, galleryInfoGlass2, channelBus))
script14.spawn(galleryInfoGlass3, {"text":"FLOOR 3\n@ARTIST\n#PROJECT\n^PRICE","fontSize":7,"font":"SF_Heavy","color":"#000000"}, createChannel(channelId, galleryInfoGlass3, channelBus))
script12.spawn(blockFloorLight4, {"startOn":true,"clickable":true}, createChannel(channelId, blockFloorLight4, channelBus))
script15.spawn(triggerTileSciFi, {"enabled":true,"onEnter":[{"entityName":"blockFloorLight","actionId":"activate","values":{}},{"entityName":"blockFloorLight2","actionId":"activate","values":{}}]}, createChannel(channelId, triggerTileSciFi, channelBus))